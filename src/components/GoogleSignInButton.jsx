"use client";
import { authClient } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const GoogleSignInButton = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (!data) return toast.danger("Login Failed");
    console.log(data);
  };

  return (
    <Button
      onClick={handleSignIn}
      className="w-full rounded-xl"
      size="lg"
      variant="tertiary">
      <Icon icon="devicon:google" />
      Sign in with Google
    </Button>
  );
};
export default GoogleSignInButton;
