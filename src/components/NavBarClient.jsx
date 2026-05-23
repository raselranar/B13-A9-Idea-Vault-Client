"use client";
import Link from "next/link";
import { useState } from "react";
import { LuZap } from "react-icons/lu";
import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label, Separator } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import NavLink from "./NavLink";
import DarkMode from "./DarkMode";
const NavBarClient = ({ session }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/ideas">Ideas</NavLink>
      </li>
      {session && (
        <>
          <li>
            <NavLink href="/add-idea">Add Idea</NavLink>
          </li>
          <li>
            <NavLink href="/my-idea">My Ideas</NavLink>
          </li>
          <li>
            <NavLink href="/my-interactions">My Interactions</NavLink>
          </li>
        </>
      )}
    </>
  );

  // login and logout buttons
  const LoginButtons = !session ? (
    <div className="flex items-center gap-4">
      <div>
        <Link
          href="/login"
          className="px-6 py-2.5 text-white font-semibold border-2 border-white rounded-full hover:bg-white hover:text-orange-500 transition-all">
          Login
        </Link>
      </div>
      <div>
        <Link
          href="/register"
          className="px-6 py-2.5 bg-white text-orange-500 font-semibold rounded-full  hover:bg-yellow-300 hover:text-orange-600 transition-all shadow-lg">
          Sign Up
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <Dropdown className="bg-white dark:bg-slate-900" variant="flat">
        <Button
          aria-label="Menu"
          variant="outline"
          size="lg"
          className="border-2 py-5 shadow-lg bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700">
          <Avatar size="sm">
            <Avatar.Image
              alt={session?.user?.name || "User Avatar"}
              src={session?.user?.image || null}
            />
            <Avatar.Fallback className="my-4">
              {session?.user?.name.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
          <div className="font-bold dark:text-slate-300">
            {session?.user?.name}
          </div>
          <ChevronDown className="text-gray-500 dark:text-slate-300" />
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu
            onAction={(key) => console.log(`Selected: ${key}`)}
            className="dark:bg-slate-800">
            <Dropdown.Item
              id="new-file"
              textValue="New file"
              className="dark:text-slate-300 dark:hover:bg-slate-700">
              <Link href="/my-profile">
                <Label className="dark:text-slate-300">Update Profile</Label>
              </Link>
            </Dropdown.Item>

            <Dropdown.Item
              onClick={async () => {
                // refresh the page after logout
                await authClient.signOut();
                window.location.href = "/login";
              }}
              id="delete-file"
              textValue="Delete file">
              <Label className="text-red-500 dark:text-white dark:hover:bg-slate-700">
                Logout
              </Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );

  return (
    <nav className="sticky top-0 z-40 w-full  border-separator bg-gradient ">
      <header className="flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-2 rounded-xl bg-white ">
                <LuZap
                  size={28}
                  color="text-orange-500"
                  className="text-orange-500"
                  fill="currentColor"
                />
              </motion.div>
              <h2 className="text-white text-2xl font-bold">
                IDEA<span className="text-yellow-300">VAULT</span>
              </h2>
            </div>
          </Link>
        </div>
        <ul className="hidden items-center gap-2 lg:flex  transition-all">
          {links}
        </ul>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">{LoginButtons}</div>
          <DarkMode />
        </div>
      </header>
      {/* small devices nav */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-4 p-4  transition-all">{links}</ul>
          <div className="flex items-center">
            <div className="p-4 flex my-3">{LoginButtons}</div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBarClient;
