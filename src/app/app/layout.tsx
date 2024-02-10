import NavBar from "@/components/layout/nav-bar";
import { getServerAuthSession } from "@/server/auth";
import { type NextLayoutProps } from "@/types";
import { redirect } from "next/navigation";

const Layout = async ({ children }: NextLayoutProps) => {
  const session = await getServerAuthSession();

  // every nested view is only for logged in users
  if (!session) {
    redirect("/");
  }

  return (
    <>
      <NavBar user={session.user} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
