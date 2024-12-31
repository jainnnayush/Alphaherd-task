"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Avatar, Checkbox } from "@mui/material";

const recipients = [
  {
    id: 1,
    name: "Quentin Tarantino",
    image: "/patient.png?height=40&width=40",
  },
  { id: 2, name: "Rhea Pais", image: "/patient2.png?height=40&width=40" },
  {
    id: 3,
    name: "Samuel L. Jackson",
    image: "/patient3.png?height=40&width=40",
  },
  {
    id: 4,
    name: "Avinash Pinto",
    image: "/patient4.png?height=40&width=40",
  },
  { id: 5, name: "Ruben Brandt", image: "/patient5.png?height=40&width=40" },
  {
    id: 6,
    name: "Alexander Trakovsky",
    image: "/patient6.png?height=40&width=40",
  },
  {
    id: 7,
    name: "Samuel L. Jackson",
    image: "/patient7.png?height=40&width=40",
  },
];

export function RecipientSelector() {
  const [selected, setSelected] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectAll = () => {
    setSelected(recipients.map((recipient) => recipient.id));
  };

  const handleClearAll = () => {
    setSelected([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-base font-sans font-bold text-[#6B7E7D] mb-4 h-[55px] flex items-center">
        Select recipients
      </h2>
      <div className="mb-4 bg-[#F4F5F7] p-1 rounded-lg">
        <div className="relative flex items-center bg-[#F4F5F7] rounded-lg px-3 py-2 w-full">
          <input
            type="text"
            placeholder="Search for a client"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow pl-2 text-sm text-gray-700 focus:outline-none bg-[#F4F5F7]"
          />
          <Search className="text-gray-400 hover:text-gray-600" size={20} />
          <button className="px-2 text-gray-400 hover:text-gray-600 ml-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_792"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#38F8E6" />
              </mask>
              <g mask="url(#mask0_1_792)">
                <path
                  d="M10 18V16H14V18H10ZM6 13V11H18V13H6ZM3 8V6H21V8H3Z"
                  fill="#A2A3A3"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
  {selected.map((id) => {
    const selectedRecipient = recipients.find((recipient) => recipient.id === id);
    return (
      <div
        key={id}
        className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1"
      >
        <Avatar className="h-5 w-5">
          <img
            src={selectedRecipient?.image}
            alt={selectedRecipient?.name}
            className="rounded-full"
          />
        </Avatar>
        <span className="text-xs px-2 text-[#6B7E7D]">
          {selectedRecipient?.name}
        </span>
        <button
          className="text-gray-400 hover:text-gray-600 ml-1"
          onClick={() => setSelected(selected.filter((selectedId) => selectedId !== id))}
        >
          ×
        </button>
      </div>
    );
  })}
</div>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {recipients.map((recipient) => (
          <div
            key={recipient.id}
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <img
                  src={recipient.image}
                  alt={recipient.name}
                  className="rounded-full"
                />
              </Avatar>
              <span className="text-sm text-[#A2A3A3]">{recipient.name}</span>
            </div>
            <Checkbox
              checked={selected.includes(recipient.id)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                if (isChecked) {
                  setSelected([...selected, recipient.id]);
                } else {
                  setSelected(selected.filter((id) => id !== recipient.id));
                }
              }}
              sx={{
                color: "#D1D5DB", // Default unchecked color
                "&.Mui-checked": {
                  color: "#35BEB1", // Checked color
                },
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end px-4 mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={handleSelectAll}
          className="text-sm text-[#A2A3A3] px-4 hover:text-gray-500"
        >
          Select All
        </button>
        <button
          onClick={handleClearAll}
          className="text-sm text-[#A2A3A3] hover:text-gray-500"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
