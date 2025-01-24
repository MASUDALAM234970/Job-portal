import React from "react";
import { Navbar } from "../shared/Navbar";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="font-bold text-2xl text-gray-800 mb-6 text-center">
            Login
          </h1>

          <div className="my-4">
            <Label className="block text-sm font-medium text-gray-600">
              Email
            </Label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="my-4">
            <Label className="block text-sm font-medium text-gray-600">
              Password
            </Label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer" // Corrected here
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recuiter"
                  className="cursor-pointer" // Corrected here
                />
                <Label htmlFor="r2">Recuiter</Label>
              </div>
            </RadioGroup>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account ?
            <a
              href="/signup"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
