import { type User } from "next-auth";
import Link from "next/link";
import SideMenu from "./side-menu";

import { ModeToggle } from "../ui/theme-toggle";

interface NavBarProps {
  user: User;
}

const NavBar = ({ user }: NavBarProps) => {
  return (
    <header className="w-full border-b px-3 py-1">
      <nav className="mx-auto flex items-center justify-between">
        <SideMenu user={user} />

        <Link href="/app">
          <span className="font-logo text-lg text-primary">Recipify</span>
        </Link>

        <ModeToggle />
      </nav>
    </header>
  );
};

export default NavBar;
