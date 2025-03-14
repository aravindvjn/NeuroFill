import { AuthOptions } from "next-auth";
import { prisma } from "./db";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorization: {
            params: {
                scope: "openid email profile"
            }
        }
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "email", type: "text" },
            password: { label: "password", type: "password" },
        },
        async authorize(credentials) {
            console.log("credentials", credentials?.email);
            if (!credentials?.email || !credentials?.password) {
                throw new Error("Please provide both email and password");
            }

            const user = await prisma.user.findUnique({
                where: { email: credentials.email },
            });

            if (!user || !user.password) {
                throw new Error("User not found");
            }

            const valid = await bcrypt.compare(credentials.password, user.password);

            if (!valid) {
                throw new Error("Invalid credentials");
            }

            return user;
        },
    }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth",
    },
    callbacks: {
        async signIn({ user, account }) {
            if (!user || !user.email) {
                console.error("No email found for user:", user);
                throw new Error("Email is required for sign-in.");
            }

            if (account?.provider === "google") {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email },
                });

                if (!existingUser) {
                    const newUser =await prisma.user.create({
                        data: {
                            email: user.email,
                            firstName: user.name || "NeuroFill User",
                            profilePic: user.image || null,
                        },
                    });
                    user.id = newUser.id;
                }else{
                    user.id = existingUser.id;
                }
            }

            return true;
        },
        async session({ session, token }) {
            if (token?.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
