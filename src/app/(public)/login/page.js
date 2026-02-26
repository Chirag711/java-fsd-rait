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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
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
            />
          </div>
          <div className="flex flex-col space-y-2 relative">
            <Label>Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="mb-4"
            />
            <Button className="absolute right-1 top-5 bg-transparent hover:bg-transparent "
            onClick={()=>{setShowPassword(!showPassword)

            }}
            >
              {showPassword ? <EyeOff color="black" /> : <Eye color="black" />}
            </Button>
          </div>
          <Button className="w-full">Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
