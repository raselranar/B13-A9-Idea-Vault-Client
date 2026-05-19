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
      disableRedirect: true,
    });
    console.log(data);
    if (!data) return toast.danger("Login Failed");
    toast.success("Login Successful");
    setTimeout(() => {
      router.back();
    }, 500);
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
