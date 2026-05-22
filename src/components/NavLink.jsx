"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ href, children }) => {
  const { data: session } = authClient.useSession();
  const pathname = usePathname();
  const activeStyle = "w-full bg-white/50 font-bold";
  const isActive = href === pathname;
  const combinedClassName = isActive ? activeStyle : "";

  return (
    <Link
      href={href}
      className={` w-full text-white/90 px-4 py-2 font-medium hover:bg-white/20 text-lg rounded-lg ${combinedClassName}`}>
      {children}
    </Link>
  );
};
export default NavLink;
