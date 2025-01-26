import { Label } from "flowbite-react";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

export default function FilterCard() {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <div className="w-full bg-white p-3 rounded-md shadow-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, idx) => (
        <div key={idx}>
          <h2 className="font-bold text-lg mt-3">{data.filterType}</h2>
          <RadioGroup
            value={selectedValue}
            onChange={setSelectedValue}
            className="space-y-2 mt-2"
          >
            {data.array.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={item}
                  id={`${data.filterType}-${index}`}
                />
                <Label htmlFor={`${data.filterType}-${index}`}>{item}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
}
