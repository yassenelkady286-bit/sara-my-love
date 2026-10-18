import { cookies } from "next/headers";
import { isValidSession } from "@/lib/auth";
import LovePage from "@/components/LovePage";
import LoginPage from "@/components/LoginPage";

export const dynamic = "force-dynamic";

export default async function Home() {
  const cookieStore = await cookies();
  const session = cookieStore.get("sara_love_session")?.value;
  const unlocked = session ? isValidSession(session) : false;

  return unlocked ? <LovePage /> : <LoginPage />;
}
