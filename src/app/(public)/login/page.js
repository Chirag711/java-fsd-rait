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
import { login } from "@/services/authService";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();   
        const res = await login(formData)

        localStorage.setItem("token", res.token)
        router.push("/dashboard")
    }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-[400px] p-4 pt-6">
        <CardHeader className="flex flex-col items-center space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              className="mb-4"
              onChange={(e)=>setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col space-y-2 relative">
            <Label>Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="mb-4"
              onChange={(e)=>setFormData({...formData, password: e.target.value})}
            />
            <Button className="absolute right-1 top-5 bg-transparent hover:bg-transparent "
            onClick={()=>{setShowPassword(!showPassword)

            }}
            >
              {showPassword ? <EyeOff className="text-black dark:text-white" /> : <Eye className="text-black dark:text-white" />}
            </Button>
          </div>
          <div className="text-right mb-4">
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full" onClick={handleSubmit}>Login</Button>
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
