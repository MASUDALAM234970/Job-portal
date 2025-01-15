import React from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

export const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-500 ">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>jobs</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div>
              <Button variant="outline">Login</Button>
              <Button> SignUp</Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/98762960?v=4" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-5 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/98762960?v=4" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">MD MASUD ALM</h4>
                    <p className="text-sm text-muted-foreground">Nothing</p>
                  </div>
                </div>
                <div className="flex flex-col my-2 gap-3 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};
