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
            <li className="group relative flex-shrink-0">
              <Link
                href="/brand"
                className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap"
              >
                브랜드소개
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block z-50">
                <div className="bg-white border rounded-lg shadow-xl py-3 min-w-[180px]">
                  <Link
                    href="/brand/promise"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    짬뽕지존의 약속
                  </Link>
                  <Link
                    href="/brand/news"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    브랜드 소식
                  </Link>
                  <Link
                    href="/brand/location"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    본사 위치
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative flex-shrink-0">
              <Link href="/menu" className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap">
                메뉴소개
              </Link>
            </li>
            <li className="group relative flex-shrink-0">
              <Link
                href="/store"
                className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap"
              >
                매장안내
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block z-50">
                <div className="bg-white border rounded-lg shadow-xl py-3 min-w-[180px]">
                  <Link
                    href="/store/find"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    매장찾기
                  </Link>
                  <Link
                    href="/store/interior"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    매장 인테리어
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative flex-shrink-0">
              <Link
                href="/franchise"
                className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap"
              >
                프랜차이즈안내
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block z-50">
                <div className="bg-white border rounded-lg shadow-xl py-3 min-w-[180px]">
                  <Link
                    href="/franchise/competitive"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    브랜드 경쟁력
                  </Link>
                  <Link
                    href="/franchise/cost"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    개설비용/절차
                  </Link>
                  <Link
                    href="/franchise/recommend"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    추천점포
                  </Link>
                  <Link
                    href="/franchise/consult"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    1:1창업상담
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex-shrink-0">
              <Link href="/blog" className="text-sm md:text-base font-medium text-primary-foreground hover:text-red-500 transition-colors whitespace-nowrap">
                블로그
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
