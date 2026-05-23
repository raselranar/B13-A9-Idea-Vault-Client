"use client";

import GoogleSignInButton from "@/components/GoogleSignInButton";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData tfo plain object
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      ...userData,
      rememberMe: true,
    });
    if (error) return toast.danger(error.message);

    toast.success("Login Successful");
    router.back();
  };
  return (
    <div className="bg-background px-4 dark:bg-slate-900 flex items-center justify-center py-12">
      <div className="outline-1 outline-gray-300 dark:outline-slate-700 rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl sm:text-5xl font-black text-center dark:text-white ">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 dark:text-slate-300 text-lg">
          Login to continue your innovation journey
        </p>
        <Form
          className="flex flex-col gap-4 mt-6 rounded-2xl"
          onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}>
            <Label className="text-base">Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          {/* password */}
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              // one lower case
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }

              return null;
            }}>
            <Label className="text-base">Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <Link href="" className="text-danger/80 font-bold -mt-2">
            Forgot password?
          </Link>
          <div className="flex flex-col gap-6">
            <Button
              fullWidth
              size="lg"
              className="bg-gradient rounded-xl"
              type="submit">
              Sign In
            </Button>
            <div className="flex items-center gap-4">
              <Separator className="flex-1" variant="default" />
              <span className="text-gray-500 dark:text-slate-300">
                {" "}
                OR CONTINUE WITH
              </span>
              <Separator className="flex-1" variant="default" />
            </div>
            <GoogleSignInButton />
          </div>
          <div className="text-gray-500 dark:text-slate-300 mt-4 text-center">
            Already have an account?{" "}
            <Link href="/register">
              <span className="text-orange-700">Sign in </span>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
