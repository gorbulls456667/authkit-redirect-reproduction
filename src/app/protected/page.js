import Link from "next/link";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

export default async function HomePage() {
  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await getUser({ ensureSignedIn: true });

  return <p>This is a protected page! {user?.firstName}</p>;
}
