'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Avatar,Checkbox } from '@mui/material'

const recipients = [
  { id: 1, name: 'Quentin Tarantino', image: '/placeholder.svg?height=40&width=40' },
  { id: 2, name: 'Rhea Pais', image: '/placeholder.svg?height=40&width=40' },
  { id: 3, name: 'Samuel L. Jackson', image: '/placeholder.svg?height=40&width=40' },
  { id: 4, name: 'Avinash Pinto', image: '/placeholder.svg?height=40&width=40' },
  { id: 5, name: 'Ruben Brandt', image: '/placeholder.svg?height=40&width=40' },
  { id: 6, name: 'Alexander Trakovsky', image: '/placeholder.svg?height=40&width=40' },
  { id: 7, name: 'Samuel L. Jackson', image: '/placeholder.svg?height=40&width=40' },
]

export function RecipientSelector() {
  const [selected, setSelected] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-base font-medium text-[#6B7E7D] mb-4">Select recipients</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search for a client"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#40C7B9] focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
          <SlidersHorizontal size={20} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
          <Avatar className="h-5 w-5">
            <img src="/placeholder.svg?height=20&width=20" alt="Rhea Pais" />
          </Avatar>
          <span className="text-xs text-[#6B7E7D]">Rhea Pais</span>
          <button className="text-gray-400 hover:text-gray-600 ml-1">×</button>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
          <Avatar className="h-5 w-5">
            <img src="/placeholder.svg?height=20&width=20" alt="Shikhar Singh" />
          </Avatar>
          <span className="text-xs text-[#6B7E7D]">Shikhar Singh</span>
          <button className="text-gray-400 hover:text-gray-600 ml-1">×</button>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
          <Avatar className="h-5 w-5">
            <img src="/placeholder.svg?height=20&width=20" alt="Quentin Tarantino" />
          </Avatar>
          <span className="text-xs text-[#6B7E7D]">Quentin Tarantino</span>
          <button className="text-gray-400 hover:text-gray-600 ml-1">×</button>
        </div>
      </div>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {recipients.map((recipient) => (
          <div
            key={recipient.id}
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <img src={recipient.image} alt={recipient.name} className="rounded-full" />
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
              className="text-[#40C7B9] border-gray-300"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
        <button className="text-sm text-[#A2A3A3] hover:text-gray-500">Select All</button>
        <button className="text-sm text-[#A2A3A3] hover:text-gray-500">Clear All</button>
      </div>
    </div>
  )
}

