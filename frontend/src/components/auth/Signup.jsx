import React, { useState } from "react";
import { Navbar } from "../shared/Navbar";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

import { USER_API_END_POINT } from "../../utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const ChangeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const FileChangeHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData(); //formdata object
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div
        onSubmit={SubmitHandler}
        className="flex items-center justify-center min-h-screen bg-gray-100"
      >
        <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="font-bold text-2xl text-gray-800 mb-6 text-center">
            Sign Up
          </h1>
          <div className="my-4">
            <Label className="block text-sm font-medium text-gray-600">
              Full Name
            </Label>
            <input
              name="fullname"
              onChange={ChangeEventHandler}
              value={input.fullname}
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
              name="email"
              onChange={ChangeEventHandler}
              value={input.email}
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
              name="phoneNumber"
              onChange={ChangeEventHandler}
              value={input.phoneNumber}
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
              name="password"
              onChange={ChangeEventHandler}
              value={input.password}
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
                  checked={input.role === "student"}
                  onChange={ChangeEventHandler}
                  className="cursor-pointer" // Corrected here
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recuiter"
                  checked={input.role === "Recuiter"}
                  onChange={ChangeEventHandler}
                  className="cursor-pointer" // Corrected here
                />
                <Label htmlFor="r2">Recuiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={FileChangeHandler}
              />
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
