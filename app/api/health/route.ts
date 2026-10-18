import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ ok: false, database: "DATABASE_URL is not configured" }, { status: 503 });
  }
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`select now() as server_time`;
    return NextResponse.json({ ok: true, database: "connected", serverTime: result[0]?.server_time });
  } catch {
    return NextResponse.json({ ok: false, database: "connection failed" }, { status: 503 });
  }
}
