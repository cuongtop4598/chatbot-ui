"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <div className="flex items-center justify-center p-4">
          <Image
            src="/logo-vtx.webp"
            alt="VTX Logo"
            width={256}
            height={256}
            className="rounded-lg bg-gray-100 bg-opacity-30 p-2 shadow-md"
          />
        </div>
      </div>

      <div className="mt-2 text-4xl font-bold">Chatbot with Vlocal</div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
