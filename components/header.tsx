"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* 로고 영역 */}
        <div className="px-1 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 p-0 m-0">
            <div className="relative w-[165px] h-[80px] p-0 m-0">
              <Image
                src="/logo1.png"
                alt="짬뽕클릭 로고"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex flex-col items-end pr-4">
            <h1 className="text-m md:text-xl font-bold text-primary-foreground">
              <span className="text-red-600">불맛</span>으로
            </h1>
            <p className="text-m md:text-xl font-bold text-primary-foreground/80">
              <span className="text-red-600">짬뽕</span>의 품격을 높이다
            </p>
          </div>
        </div>

        {/* 메뉴 영역 */}
        <nav className="border-t border-primary-foreground/10">
          <ul className="flex items-center justify-center gap-6 md:gap-12 py-4 px-4 overflow-x-auto scrollbar-hide">
            <li className="flex-shrink-0">
              <a
                href="#about"
                className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                식당소개
              </a>
            </li>
            <li className="flex-shrink-0">
              <a
                href="#menu"
                className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                메뉴소개
              </a>
            </li>
         
            <li className="flex-shrink-0">
              <a
                href="#franchise"
                className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                프랜차이즈안내
              </a>
            </li>
            <li className="flex-shrink-0">
              <a
                href="#location"
                className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                매장안내
              </a>
            </li>
            <li className="flex-shrink-0">
              <Link href="/interior" className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap">
                인테리어
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
