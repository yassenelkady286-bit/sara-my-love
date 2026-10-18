import { createHmac, timingSafeEqual } from "node:crypto";

const SESSION_SECONDS = 60 * 60 * 24 * 7;

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 32) {
    throw new Error("SESSION_SECRET must be set to a random string of at least 32 characters.");
  }
  return value;
}

function signature(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function createSession() {
  const payload = `${Date.now() + SESSION_SECONDS * 1000}`;
  return `${payload}.${signature(payload)}`;
}

export function isValidSession(token: string) {
  try {
    const [payload, suppliedSignature] = token.split(".");
    if (!payload || !suppliedSignature || !/^\d+$/.test(payload)) return false;
    if (Number(payload) < Date.now()) return false;
    const expected = signature(payload);
    const a = Buffer.from(suppliedSignature);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
