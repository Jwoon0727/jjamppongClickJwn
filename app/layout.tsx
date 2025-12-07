import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSerifKr = Noto_Serif_KR({ subsets: ["latin"], weight: ["400", "700"] })
const notSansKr = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "짬뽕클릭 - 정통 중국 짬뽕",
  description: "진정한 맛의 정통 중국 짬뽕을 경험하세요. 신선한 재료와 전통 조리법으로 만든 프리미엄 중식당입니다.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSerifKr.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
