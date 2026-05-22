"use client";
import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";
import { LuMoveLeft, LuSave } from "react-icons/lu";

export default function UpdateProfilePage() {
  const { data: session } = authClient.useSession();

  // update profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const updateData = {
      name: userData?.name?.trim(),
    };
    // image url empty
    if (userData?.image && userData.image.trim().length !== 0) {
      updateData.image = userData.image.trim();
    }

    const { data, error } = await authClient.updateUser(updateData);
    if (data?.status) return toast.success("Profile updated successfully!");

    toast.danger("Profile updated failed");
  };

  return (
    <div className="flex justify-center py-12 bg-background dark:bg-slate-800 px-4">
      <Card className="flex  w-96 flex-col gap-4 p-0 rounded-3xl px-4 py-6 shadow-xl">
        <div className="">
          <div className="w-full flex justify-center">
            <Badge.Anchor>
              <Avatar className="size-26 rounded-full border-4 border-white">
                <Avatar.Image
                  alt={session?.user?.name}
                  src={session?.user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback className="text-2xl text-accent">
                  {session?.user?.name.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
            </Badge.Anchor>
          </div>
          {/* logo */}
          <div className="flex items-center flex-col">
            <h2 className="text-2xl text-gray-800 sm:text-3xl font-bold tracking-wider mt-4">
              {session?.user?.name}
            </h2>
          </div>

          {/* form */}
          <Form onSubmit={handleUpdateProfile}>
            {/* Full Name */}
            <TextField isRequired name="name">
              <Label>Full Name</Label>
              <Input className="py-3" placeholder="Your Name" />
              <FieldError />
            </TextField>
            {/* Photo URL (optional) */}
            <TextField
              name="image"
              type="url"
              validate={(value) => {
                if (
                  value &&
                  !value.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i)
                ) {
                  return "Please enter a valid image URL (e.g., .jpg, .png)";
                }
                return null;
              }}>
              <Label className="flex gap-1 items-center">
                Photo URL
                <span className="text-gray-500 dark:text-slate-300 text-xs">
                  (optional)
                </span>
              </Label>
              <Input
                className="py-3"
                placeholder="https://example.com/photo.jpg"
              />
              <FieldError />
            </TextField>
            <div className="mt-4">
              <Button fullWidth className="bg-gradient" size="lg" type="submit">
                <LuSave />
                <span>Update Information</span>
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
}
