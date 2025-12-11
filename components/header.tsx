"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <nav className="max-w-7xl mx-auto px-1 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3 p-0 m-0">
          <div className="relative w-[220px] h-[80px] p-0 m-0">
            <Image
              src="/logo1.png"
              alt="짬뽕클릭 로고"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-red-500 transition-colors">
            소개
          </a>
          <a href="#menu" className="hover:text-red-500 transition-colors">
            메뉴
          </a>
          <a href="#location" className="hover:text-red-500 transition-colors">
            위치
          </a>
          <Link href="/interior">
            <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              인테리어
            </button>
          </Link>
        </div>

        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴"
        >
          <span
            className={`w-6 h-0.5 bg-primary-foreground rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2 bg-accent" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary-foreground rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-0" : "group-hover:w-5"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary-foreground rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2 bg-accent" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary/95 border-t border-accent/30 px-4 py-4 space-y-4">
          <a
            href="#about"
            className="block hover:text-red-500 transition-colors hover:translate-x-2 transform duration-200"
            onClick={() => setIsOpen(false)}
          >
            소개
          </a>
          <a
            href="#menu"
            className="block hover:text-red-500 transition-colors hover:translate-x-2 transform duration-200"
            onClick={() => setIsOpen(false)}
          >
            메뉴
          </a>
          <a
            href="#location"
            className="block hover:text-red-500 transition-colors hover:translate-x-2 transform duration-200"
            onClick={() => setIsOpen(false)}
          >
            위치
          </a>
          <Link href="/interior" onClick={() => setIsOpen(false)}>
            <button className="w-full px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all hover:scale-105 duration-200">
              인테리어
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
