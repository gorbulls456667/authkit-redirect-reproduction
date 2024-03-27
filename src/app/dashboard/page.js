import { getUser } from "@workos-inc/authkit-nextjs";

export default async function Dashboard() {
  const { user } = await getUser({ ensureSignedIn: true });
  return "This is the dashboard!";
}
