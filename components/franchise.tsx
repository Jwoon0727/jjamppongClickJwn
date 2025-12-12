"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react"

const franchises = [
  {
    id: 1,
    name: "본점",
    address: "충남 천안시 서북구 부성9로 6",
    phone: "041-902-2600",
    hours: "11:00 - 22:00",
    image: "/interior.jpeg",
  },
  {
    id: 2,
    name: "충주점",
    address: "충주시 충주읍 충주로 456",
    phone: "02-2345-6789",
    hours: "11:00 - 23:00",
    image: "/asian-fusion-restaurant-interior-with-neon-lights.jpg",
  },
  
  {
    id: 6,
    name: "런칭준비중",
    address: "곧 여러분 곁에 찾아갑니다",
    phone: "대표번호: 1588-0000",
    hours: "Coming Soon",
    image: "/elegant-restaurant-coming-soon-teaser-with-golden-.jpg",
    isComingSoon: true,
  },
]

export function Franchise() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? franchises.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === franchises.length - 1 ? 0 : prev + 1))
  }

  const currentFranchise = franchises[currentIndex]

  return (
    <section className="w-full bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-red-600">매장 안내</h2>
          <p className="text-lg text-primary-foreground/80">짬뽕클릭의 프리미엄 매장을 만나보세요</p>
        </div>

        <div className="mb-8 overflow-x-auto border-b-2 border-primary-foreground/20">
          <div className="flex gap-2 min-w-max pb-4">
            {franchises.map((franchise, index) => (
              <button
                key={franchise.id}
                onClick={() => setCurrentIndex(index)}
                className={`px-6 py-3 whitespace-nowrap font-semibold transition-all border-b-2 ${
                  index === currentIndex
                    ? "text-red-600 border-b-red-600"
                    : "text-primary-foreground/70 hover:text-primary-foreground border-b-transparent"
                } ${franchise.isComingSoon ? "relative" : ""}`}
              >
                {franchise.name}
                {franchise.isComingSoon && (
                  <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded-full animate-pulse">NEW</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Franchise Display */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Image Section */}
          <div className="flex-1 relative group overflow-hidden rounded-lg">
            <img
              src={currentFranchise.image || "/placeholder.svg"}
              alt={currentFranchise.name}
              className="w-full h-96 lg:h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            {currentFranchise.isComingSoon && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce">🎊</div>
                  <h3 className="text-4xl font-bold text-white mb-2">Coming Soon</h3>
                  <p className="text-xl text-red-500 font-bold">새로운 매장이 곧 오픈합니다</p>
                </div>
              </div>
            )}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all z-10"
              aria-label="Previous franchise"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all z-10"
              aria-label="Next franchise"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {franchises.length}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex flex-col justify-center bg-primary/80 p-8 rounded-lg border border-primary-foreground/20">
            {currentFranchise.isComingSoon ? (
              <>
                <div className="text-center mb-6">
                  <span className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                    🚀 COMING SOON
                  </span>
                  <h3 className="text-3xl font-bold mb-4 font-serif text-red-600">{currentFranchise.name}</h3>
                </div>
                <div className="space-y-6 mb-8 text-center">
                  <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 rounded-lg border-2 border-red-600/50">
                    <p className="text-2xl font-bold text-red-600 mb-2">새로운 짬뽕클릭</p>
                    <p className="text-lg text-primary-foreground/80">{currentFranchise.address}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg text-primary-foreground/90">📍 더 나은 위치에서</p>
                    <p className="text-lg text-primary-foreground/90">✨ 더 프리미엄한 인테리어로</p>
                    <p className="text-lg text-primary-foreground/90">🍜 더 맛있는 짬뽕으로</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-primary-foreground/70 mb-2">가맹 문의</p>
                    <p className="text-xl font-bold text-red-600">{currentFranchise.phone}</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  알림 신청하기 🔔
                </button>
              </>
            ) : (
              <>
                <h3 className="text-3xl font-bold mb-6 font-serif text-red-600">{currentFranchise.name}</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">주소</p>
                      <p className="text-lg">{currentFranchise.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">전화</p>
                      <p className="text-lg">{currentFranchise.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 text-red-600 flex-shrink-0 mt-1">⏰</div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">영업시간</p>
                      <p className="text-lg">{currentFranchise.hours}</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://m.place.naver.com/restaurant/1242088904/review/visitor?entry=plt&type=photoView" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center block"
                >
                  리뷰작성하러 바로가기 →
                </a>
                <a
                  href="/interior"
                  className="w-full mt-4 bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-red-600 text-center block"
                >
                  인테리어 자세히 보기 🏗️
                </a>
              </>
            )}
          </div>
        </div>

        {/* Franchise List - Mobile Friendly */}
      
      </div>
    </section>
  )
}
