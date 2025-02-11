import { auth } from "@/server/auth";
import { UserButton } from "./user-button";

import Link from "next/link";

export default async function nav() {
  const session = await auth();
  return (
    <header className="py-4 bg-slate-500">
      <nav>
        <ul className="flex justify-between">
          <li>Logo</li>
          {!session ? (
            <li>
              <button>
                <Link href="/auth/login">login</Link>
              </button>
            </li>
          ) : (
            <UserButton expires={session?.expires} user={session?.user} />
          )}
        </ul>
      </nav>
    </header>
  );
}
