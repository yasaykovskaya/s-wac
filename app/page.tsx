import Image from "next/image"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <main className="relative flex h-dvh flex-col items-center justify-between overflow-hidden bg-[#070532] p-3 text-white md:p-6">
      {/* Logo */}
      <Logo />

      <div className="flex flex-1 items-center justify-center py-2 md:py-0">
        <Image
          src="/images/text.png"
          alt="WEST ACRE CAPITAL"
          width={550}
          height={138}
          className="w-full max-w-[300px] md:max-w-[300px] lg:max-w-[550px]"
          priority
        />
      </div>

      <div className="w-full text-center text-[8px] md:text-[10px]">
        <p className="mb-0">Palo Alto, CA, USA</p>
        <p>© 2025 West Acre Capital. All rights reserved.</p>
      </div>
    </main>
  )
}
