import { NextRequest } from "next/server";

export async function verifyAdmin(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) return null;

  try {
    // Call your existing verification route internally
    const baseUrl = request.nextUrl.origin;
    const res = await fetch(`${baseUrl}/api/users/me`, {
      headers: { Authorization: authHeader },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const user = data.userProfile;

    // Return the user object if they pass the admin check
    if (user && user.isAdmin) {
      return user;
    }
  } catch (error) {
    console.error("Auth check failed:", error);
  }

  return null;
}