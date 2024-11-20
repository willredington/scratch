import { auth } from "@clerk/nextjs/server";
import { CircleUserIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex w-full items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        <Sparkles />
        <Link className="text-2xl" href="/">
          Auto Task
        </Link>
      </div>
      {session.sessionId != null && (
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <CircleUserIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
              <DropdownMenuItem>
                <Link href="/api/auth/signout">Signout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
}
