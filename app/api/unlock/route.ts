import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: { password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const expected = process.env.LOVE_PASSWORD;
  if (!expected) {
    return NextResponse.json({ error: "The site password has not been configured." }, { status: 500 });
  }

  if (typeof body.password !== "string" || body.password !== expected) {
    // Avoid revealing which part of the login was incorrect.
    return NextResponse.json({ error: "Wrong password. Try again, my love ♡" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("sara_love_session", createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
