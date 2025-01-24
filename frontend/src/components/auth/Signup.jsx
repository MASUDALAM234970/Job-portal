import React from "react";
import { Navbar } from "../shared/Navbar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="font-bold text-2xl text-gray-800 mb-6 text-center">
            Sign Up
          </h1>
          <div className="my-4">
            <Label className="block text-sm font-medium text-gray-600">
              Full Name
            </Label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
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
              Phone Number
            </Label>
            <input
              type="number"
              placeholder="Enter your phone number"
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
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
