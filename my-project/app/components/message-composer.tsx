"use client";

import { useState } from "react";
import { Paperclip, Link2, Smile, ImageIcon, Send } from "lucide-react";

type CommunicationType = "SMS" | "Mail" | "WhatsApp";

interface MessagePrompt {
  text: string;
  tags: string[];
}

export function MessageComposer() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [selectedMode, setSelectedMode] = useState<CommunicationType>("SMS");
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prompt, setPrompt] = useState<MessagePrompt>({
    text: "An email to all dog parents inviting them for an annual health check up",
    tags: [
      "Promotion mail about ...",
      "Announcement about ...",
      "Advertisement for ...",
    ],
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl w-full">
      <h2 className="text-[15px] text-[#6B7E7D] mb-4">Compose your message</h2>

      {/* Toolbar */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-4 mb-4 border-b pb-4">
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-gray-400"
            >
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <Paperclip size={15} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <Link2 size={15} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <Smile size={15} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ImageIcon size={15} className="text-gray-400" />
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-4 border-b pb-4">
          <button className="ml-auto flex items-center gap-2 bg-[#40C7B9] hover:bg-[#3BB3A6] text-white px-4 py-2 rounded-md">
            <span className="text-sm">Compose</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Prompt Box */}
      <div className="bg-[#2A2A2A] rounded-lg p-4 mb-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {prompt.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-[#3A3A3A] text-[#CCCCCC] rounded-full text-[13px]"
            >
              {tag}
            </span>
          ))}
          <button className="ml-auto text-[#999999] hover:text-[#CCCCCC] p-1">
            ×
          </button>
        </div>
        <div className="flex items-center justify-between text-[#CCCCCC] bg-[#333333] rounded p-3">
          <p className="text-[13px]">{prompt.text}</p>
          <button className="bg-[#40C7B9] p-1.5 rounded text-white hover:bg-[#3BB3A6]">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="min-h-[300px] mb-4"></div>

      {/* Communication Modes */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex gap-3">
          {(["SMS", "Mail", "WhatsApp"] as CommunicationType[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100"
            >
              {mode === "SMS" && (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              )}
              {mode === "Mail" && (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              )}
              {mode === "WhatsApp" && (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
              )}
              <span className="text-[13px]">{mode}</span>
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded">
          <span className="text-[13px]">Send</span>
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
