import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();

// Match against pages that require auth
// Leave this out if you want auth on every page in your application
export const config = { matcher: ["/:path*"] };
