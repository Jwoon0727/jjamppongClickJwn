"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    "/IMG_2500.png",
    "/korean-chinese-restaurant-interior-with-jjamppong-.jpg",
    "/steaming-hot-jjamppong-soup-with-fresh-ingredients.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide || "/IMG_2500.png"} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-red-600 w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-pretty text-white">짬뽕클릭</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">진정한 맛의 중국 짬뽕을 경험하세요</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors">
            예약하기
          </button>
          <button
            onClick={scrollToMenu}
            className="px-8 py-3 border-2 border-red-600 text-white rounded-full font-semibold hover:bg-red-600/20 transition-colors"
          >
            메뉴보기
          </button>
        </div>
      </div>
    </section>
  )
}
