import { auth } from "@/server/auth";
import { UserButton } from "./user-button";

export default async function nav() {
  const session = await auth();
  if (session)
    return (
      <header>
        <nav>
          <li>Home</li>
          <li>
            <UserButton expires={session?.expires} user={session?.user} />
          </li>
        </nav>
      </header>
    );
}
