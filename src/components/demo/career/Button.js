'use client'

import { useState } from "react"

const Button = () => {
    const [activeButtons, setActiveButtons] = useState(Array(14).fill(false))

  const handleToggle = (index) => {
    const updatedButtons = [...activeButtons]
    updatedButtons[index] = !updatedButtons[index]
    setActiveButtons(updatedButtons)
  }


  return (
    <div className="flex items-center justify-center w-full p-4">
    <div className="space-y-4 w-full max-w-screen-lg">
        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleToggle(index)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 font-medium rounded transition duration-300 ${
                        activeButtons[index]
                            ? 'bg-[#173e62] text-white'
                            : 'bg-gray-300 text-black'
                    }`}
                >
                    Button {index + 1}
                </button>
            ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
                <button
                    key={index + 8}
                    onClick={() => handleToggle(index + 8)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 font-medium rounded transition duration-300 ${
                        activeButtons[index + 8]
                            ? 'bg-[#173e62] text-white'
                            : 'bg-gray-300 text-black'
                    }`}
                >
                    Button {index + 9}
                </button>
            ))}
        </div>
    </div>
</div>
  )
}

export default Button
