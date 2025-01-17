import React from "react";
import { Navbar } from "../shared/Navbar";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className=" flex items-center justify-center max-w-7xl mx-auto">
        <form action="" className="w-1/2 border-gray-200 rounded-md">
          <h1 className="font-bold text-xl mb-5 ">Sign Up</h1>
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="masud" />
          </div>
        </form>
      </div>
    </div>
  );
}
