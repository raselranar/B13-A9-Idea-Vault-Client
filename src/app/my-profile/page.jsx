import { auth } from "@/lib/auth";
import { Avatar, Badge, Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { LuMail, LuPencil, LuUser } from "react-icons/lu";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="flex justify-center py-12 bg-background dark:bg-slate-900 px-4">
      <Card className="flex  w-102 flex-col gap-4 p-0 rounded-3xl pb-6 shadow-xl dark:bg-slate-800 dark:shadow-none border dark:border-slate-900 ">
        <div className=" px-4">
          <div className=" w-full flex mt-6 justify-center">
            <Badge.Anchor>
              <Avatar className="size-26 rounded-full border-4 border-white">
                <Avatar.Image
                  alt={session?.user?.name}
                  src={session?.user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback className="text-7xl text-accent">
                  {session?.user?.name.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
            </Badge.Anchor>
          </div>
          {/* logo */}
          <div className="flex items-center flex-col mt-4">
            <h2 className="text-2xl dark:text-white text-gray-800 sm:text-3xl font-bold tracking-wider ">
              {session?.user?.name}
            </h2>
          </div>
          {/* info */}
          <ul className="flex flex-col gap-4 mt-4 mx-4">
            <li className="flex gap-2 bg-orange-50 rounded-xl -mx-3 sm:mx-0 py-4 sm:px-6">
              <div className="bg-accent/40 text-accent w-fit p-2 rounded-xl flex items-center">
                <LuUser size={24} />
              </div>
              <div className="">
                <p className="text-gray-400 text-sm ">Full Name</p>
                <p className="dark:text-white">{session?.user?.name}</p>
              </div>
            </li>
            <li className="flex gap-2 bg-orange-50 rounded-xl -mx-3 sm:mx-0 py-4 sm:px-6">
              <div className="bg-accent/40 text-accent w-fit p-2 rounded-xl flex items-center">
                <LuMail size={24} />
              </div>
              <div className="truncate sm:whitespace-normal">
                <p className="text-gray-400 text-sm ">Email Address</p>
                <p className="dark:text-white truncate sm:whitespace-normal">
                  {session?.user?.email}
                </p>
              </div>
            </li>
          </ul>
          <Link href="/my-profile/update">
            <Button fullWidth className="mt-4 mb-4 bg-gradient" size="lg">
              <LuPencil />
              <span>Update Profile</span>
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
