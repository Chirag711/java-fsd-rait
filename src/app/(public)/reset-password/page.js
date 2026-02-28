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
import { forgotPassword, resetPassword } from "@/services/authService";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


const page = () => {

    const params = useSearchParams();

    const token = params.get('token'); // Get token from query params from url

    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call forgot password API
        const res = await resetPassword({token, password});
        alert(res);
    }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-[400px] p-4 pt-6">
        <CardHeader className="flex flex-col items-center space-y-1">
          <CardTitle className="text-2xl font-bold">Update Password</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Enter your new password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <Label>New Password</Label>
            <Input
              type="password"
              placeholder="Enter your new password"
              className="mb-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" onClick={handleSubmit}>
            Update Password
          </Button>
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
