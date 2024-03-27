import Link from "next/link";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

export default async function HomePage() {
  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  return user ? (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>Welcome back {user?.firstName && `, ${user?.firstName}`}</p>
      <button type="submit">Sign out</button>
    </form>
  ) : (
    <Link href={signInUrl}>Sign in</Link>
  );
}
