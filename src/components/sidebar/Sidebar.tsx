'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <aside 
      className={`relative row-span-3 h-lvh bg-gray-50 transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute -right-3 top-8 bg-gray-50 rounded-full p-1 border border-gray-200 hover:bg-gray-100 transition-all duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {isExpanded ? <ChevronLeft size={20} color="gray" /> : <ChevronRight size={20} color="gray" />}
      </button>

      <div className={`flex flex-col items-center gap-6 p-4 ${!isExpanded && 'items-center'}`}>
        <div className="mt-8">
          <div className={`rounded-full overflow-hidden border-4 border-gray-200 transition-all duration-300 ${
            isExpanded ? 'w-32 h-32' : 'w-16 h-16'
          }`}>
            <Image
              src="/images/profile-image.bmp"
              alt="Profile picture"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
        
        <nav className={`flex flex-col gap-4 ${!isExpanded && 'items-center'}`}>
          <Link 
            href="/about" 
            className={`text-gray-700 hover:text-gray-900 transition-colors duration-200 ${
              !isExpanded && 'text-center text-xs'
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </aside>
  )
}

