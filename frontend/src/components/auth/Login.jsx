import React, { useState } from "react";
import { Navbar } from "../shared/Navbar";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { setLoading } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const ChangeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      toast.success(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={SubmitHandler}
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
        >
          <h1 className="font-bold text-2xl text-gray-800 mb-6 text-center">
            Login
          </h1>

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
                  checked={input.role === "student"}
                  onChange={ChangeEventHandler}
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer" // Corrected here
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  checked={input.role === "Recuiter"}
                  onChange={ChangeEventHandler}
                  type="radio"
                  name="role"
                  value="Recuiter"
                  className="cursor-pointer" // Corrected here
                />
                <Label htmlFor="r2">Recuiter</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <Button type="submit" className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors">
              Signup
            </Button>
          )}
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
