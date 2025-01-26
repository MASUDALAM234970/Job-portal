import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  // const navigate = useNavigate();
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg"></h1>
        <p className="text-sm text-gray-500">Bangladesh</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2"></h1>
        <p className="text-sm text-gray-600"></p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
