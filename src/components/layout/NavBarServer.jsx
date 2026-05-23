import { auth } from "@/lib/auth";
import NavBarClient from "../NavBarClient";
import { headers } from "next/headers";

const NavBarServer = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);
  return <NavBarClient session={session} />;
};
export default NavBarServer;
