import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUserFromClerk, updateUserFromClerk, deleteUserFromClerk } from "@/lib/actions/clerk-user.action";

export async function POST(req: Request) {
    const SIGNING_SECRET = process.env.SIGNING_SECRET;

    if (!SIGNING_SECRET) {
        console.error("Error: SIGNING_SECRET is missing from environment variables.");
        return new Response("Internal Server Error", { status: 500 });
    }

    const wh = new Webhook(SIGNING_SECRET);

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // Validate required headers
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error: Missing Svix headers", { status: 400 });
    }

    const rawBody = await req.text();

    let evt: WebhookEvent;
    try {
        evt = wh.verify(rawBody, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Webhook verification failed:", err);
        return new Response("Error: Verification failed", { status: 400 });
    }

    const { id } = evt.data;
    const eventType = evt.type;

    if (!id) {
        return new Response(`No Id Found`, { status: 500 });
    }
    try {
        // Handle event types
        switch (eventType) {
            case "user.created":
                await createUserFromClerk(evt.data);
                break;
            case "user.updated":
                await updateUserFromClerk(evt.data);
                break;
            case "user.deleted":
                await deleteUserFromClerk(id);
                break;
            default:
                console.warn(`Unhandled event type: ${eventType}`);
        }
    } catch (error) {
        console.error(`Error processing event ${eventType}:`, error);
        return new Response(`Error processing event: ${eventType}`, { status: 500 });
    }

    if (process.env.NODE_ENV !== "production") {
        console.log(`✅ Received webhook with ID: ${id}`);
        console.log(`📢 Event Type: ${eventType}`);
        console.log("📦 Payload:", rawBody);
    }

    return new Response("Webhook received", { status: 200 });
}
