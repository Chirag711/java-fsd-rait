'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPassword } from "@/services/authService";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const page = () => {
    
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call forgot password API
        const res = await forgotPassword({ email });
        alert(res);
    }
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-[400px] p-4 pt-6">
        <CardHeader className="flex flex-col items-center space-y-1">
          <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Enter your email to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mb-4"
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="text-right mb-4">
            <Link href="/login" className="text-sm text-blue-500 hover:underline">
              Login instead?
            </Link>
          </div>
          <Button className="w-full" onClick={handleSubmit}>Reset Password</Button>
          <div className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
