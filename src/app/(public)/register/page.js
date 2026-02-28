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
import { register } from "@/services/authService";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await register(formData);
        alert(res);
    }


  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-[400px] p-4 pt-6">
        <CardHeader className="flex flex-col items-center space-y-1">
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              className="mb-4"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mb-4"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Age</Label>
            <Input
              type="number"
              placeholder="Enter your age"
              className="mb-4"
                onChange={(e) => setFormData({...formData, age: e.target.value})}
            />
          </div>
          <div className="flex flex-col space-y-2 relative">
            <Label>Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="mb-4"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
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
          <Button className="w-full" onClick={handleSubmit}>Register</Button>
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
