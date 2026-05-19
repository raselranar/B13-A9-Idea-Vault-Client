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
import { redirect } from "next/navigation";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData to plain object
    const userData = Object.fromEntries(formData);

    const { data, error } = await authClient.signUp.email({
      ...userData,
      callbackURL: "/login",
    });
    if (error) return toast.danger(error.message);

    toast.success("Registration Successful");
    redirect("/login");
    console.log(data, error);
  };
  return (
    <div className="bg-background flex items-center justify-center py-12">
      <div className="">
        <h1 className="text-4xl font-black text-center">Join IdeaVault</h1>
        <p className="text-center text-gray-500 text-lg">
          Start sharing your innovative ideas today
        </p>
        <Form
          className="flex w-96 flex-col gap-4 mt-6 shadow-xl p-6 rounded-2xl"
          onSubmit={onSubmit}>
          {/* Name */}
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (value.length === 0) {
                return "Please enter your Name";
              }

              return null;
            }}>
            <Label className="text-base">Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          {/* Email */}
          <TextField
            isRequired
            style={{ backgroundColor: "white" }}
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}>
            <Label className="text-base">Email</Label>
            <Input
              className="bg-accent"
              style={{ backgroundColor: "white" }}
              placeholder="john@example.com"
            />
            <FieldError />
          </TextField>
          {/* Image */}
          <TextField name="image" type="url">
            <Label className="text-base">Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
            <FieldError />
          </TextField>
          {/* password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
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

          <div className="flex flex-col gap-6">
            <Button
              fullWidth
              size="lg"
              className="bg-gradient rounded-xl"
              type="submit">
              Create Account
            </Button>
            {/* divider */}
            <div className="flex items-center gap-4">
              <Separator className="flex-1" variant="default" />
              <span className="text-gray-500"> OR CONTINUE WITH</span>
              <Separator className="flex-1" variant="default" />
            </div>

            <GoogleSignInButton />
          </div>
          <div className="text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-orange-700">Sign in </span>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
