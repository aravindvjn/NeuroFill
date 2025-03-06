import { currentUser } from "@/lib/get-calls/get-current-user";

export default async function page() {
  const user = await currentUser();

  console.log(user);
  return <div>hai</div>;
}
