'use client'

import { Paperclip, Link2, Smile, Image, Send } from 'lucide-react'
import { Button } from '@mui/material'

export function MessageComposer() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-base font-medium text-gray-700 mb-4">Compose your message</h2>
      <div className="flex items-center space-x-4 mb-4 border-b pb-4">
        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
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
          <Image size={15} className="text-gray-400" />
        </button>
        <Button 
          className="ml-auto bg-[#40C7B9] hover:bg-[#3BB3A6] text-white rounded-full px-4 h-8"
        >
          <span className="text-sm font-normal">Compose</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-2">
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
      <div className="bg-[#2A2A2A] rounded-lg p-4 mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <button className="px-3 py-1.5 bg-[#3A3A3A] text-gray-300 rounded-full text-sm hover:bg-[#404040] transition-colors">
            Promotion mail about ...
          </button>
          <button className="px-3 py-1.5 bg-[#3A3A3A] text-gray-300 rounded-full text-sm hover:bg-[#404040] transition-colors">
            Announcement about ...
          </button>
          <button className="px-3 py-1.5 bg-[#3A3A3A] text-gray-300 rounded-full text-sm hover:bg-[#404040] transition-colors">
            Advertisement for ...
          </button>
          <button className="ml-auto p-1 text-gray-400 hover:text-gray-300">×</button>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <p className="text-sm">An email to all dog parents inviting them for an annual health check up</p>
          <button className="bg-[#40C7B9] p-1.5 rounded text-white hover:bg-[#3BB3A6] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="min-h-[300px] mb-4"></div>
      <div className="border-t pt-4">
        <div className="flex space-x-6 mb-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              name="communication" 
              className="w-4 h-4 text-[#40C7B9] border-gray-300 focus:ring-[#40C7B9]" 
            />
            <span className="text-sm text-gray-500">SMS</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              name="communication" 
              className="w-4 h-4 text-[#40C7B9] border-gray-300 focus:ring-[#40C7B9]" 
            />
            <span className="text-sm text-gray-500">Mail</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              name="communication" 
              className="w-4 h-4 text-[#40C7B9] border-gray-300 focus:ring-[#40C7B9]" 
            />
            <span className="text-sm text-gray-500">WhatsApp</span>
          </label>
          <Button 
            className="ml-auto bg-gray-100 hover:bg-gray-200 text-gray-600 px-6 h-8"
          >
            <span className="text-sm font-normal">Send</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

