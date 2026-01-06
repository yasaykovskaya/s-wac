"use client"

import Image from "next/image"

export function Logo() {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <div className="w-full md:flex-none">
      <button onClick={handleClick} className="cursor-pointer">
        <Image
          src="/images/logo-desktop.png"
          alt="West Acre Capital"
          width={60}
          height={45}
          className="hidden md:block"
          priority
        />
      </button>
      <button onClick={handleClick} className="flex w-full cursor-pointer justify-center md:hidden">
        <Image src="/images/logo-mobile.png" alt="West Acre Capital" width={45} height={45} priority />
      </button>
    </div>
  )
}


