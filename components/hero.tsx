"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/main.jpg",
      text: "주문과 동시에 면을 뽑아 즉석으로 만드는 화끈한 짬뽕 맛 !"
    },
    {
      image: "/main00.png",
      text: "신선한 재료로 만드는 정통 중화요리의 진수"
    },
    {
      image: "/inside.jpeg",
      text: "편안하고 모던한 분위기에서 즐기는 특별한 한끼"
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/IMG_2500.png"} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 텍스트 영역 - 하단에 배경색과 함께 */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            {slides[currentSlide].text}
          </h2>
        </div>
        
        {/* 슬라이드 인디케이터 */}
        <div className="flex justify-center gap-2 pb-6">
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
      </div>
    </section>
  )
}
