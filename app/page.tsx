import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#070532] p-3 text-white md:p-6">
      {/* Logo */}
      <div className="w-full md:flex-none">
        <Link href="https://westacrecap.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/logo-desktop.png"
            alt="West Acre Capital"
            width={60}
            height={45}
            className="hidden md:block"
            priority
          />
        </Link>
        <Link
          href="https://westacrecap.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center md:hidden"
        >
          <Image src="/images/logo-mobile.png" alt="West Acre Capital" width={45} height={45} priority />
        </Link>
      </div>

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
