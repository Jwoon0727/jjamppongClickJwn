"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"

const storeInteriors = [
  {
    id: 1,
    name: "천안본점",
    stages: [
      {
        id: 1,
        stage: "착공 전",
        description: "깔끔하게 정리된 공간에서 시작합니다",
        image: "/empty-commercial-space-before-renovation.jpg",
      },
      {
        id: 2,
        stage: "공사 중",
        description: "프리미엄 중식당으로의 변신이 시작됩니다",
        image: "/restaurant-under-construction-renovation-process.jpg",
      },
      {
        id: 3,
        stage: "완공 후",
        description: "고급스럽고 세련된 짬뽕클릭 매장 완성",
        image: "/modern-elegant-chinese-restaurant-interior-finishe.jpg",
      },
    ],
    area: "35평",
    unitPrice: "380만원",
    totalCost: "1억 7,300만원",
  },
  {
    id: 2,
    name: "충주점",
    stages: [
      {
        id: 1,
        stage: "착공 전",
        description: "동대문 상권의 빈 공간에서 시작",
        image: "/empty-commercial-space-before-renovation.jpg",
      },
      {
        id: 2,
        stage: "공사 중",
        description: "현대적인 디자인의 중식당으로 탈바꿈",
        image: "/restaurant-under-construction-renovation-process.jpg",
      },
      {
        id: 3,
        stage: "완공 후",
        description: "동대문 랜드마크 짬뽕클릭 매장",
        image: "/modern-elegant-chinese-restaurant-interior-finishe.jpg",
      },
    ],
    area: "28평",
    unitPrice: "350만원",
    totalCost: "1억 3,800만원",
  },
  {
    id: 3,
    name: "-점",
    stages: [
      {
        id: 1,
        stage: "착공 전",
        description: "홍대 젊은 거리의 새로운 시작",
        image: "/empty-commercial-space-before-renovation.jpg",
      },
      {
        id: 2,
        stage: "공사 중",
        description: "트렌디한 공간으로 변화 중",
        image: "/restaurant-under-construction-renovation-process.jpg",
      },
      {
        id: 3,
        stage: "완공 후",
        description: "감각적인 홍대 짬뽕클릭 완성",
        image: "/modern-elegant-chinese-restaurant-interior-finishe.jpg",
      },
    ],
    area: "32평",
    unitPrice: "370만원",
    totalCost: "1억 6,040만원",
  },
  
]

export default function InteriorPage() {
  const [selectedStore, setSelectedStore] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)

  const currentStore = storeInteriors[selectedStore]
  const currentStages = currentStore.stages

  const handlePrevious = () => {
    setCurrentStage((prev) => (prev === 0 ? currentStages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentStage((prev) => (prev === currentStages.length - 1 ? 0 : prev + 1))
  }

  const handleStoreChange = (index: number) => {
    setSelectedStore(index)
    setCurrentStage(0)
  }

  const costBreakdown = [
    { item: "평당 단가", amount: currentStore.unitPrice, description: "인테리어 공사 평당 비용" },
    { item: "총 평수", amount: currentStore.area, description: "기준 매장 면적" },
    { item: "인테리어 비용", amount: currentStore.totalCost, description: "전체 인테리어 공사 비용" },
    { item: "주방 설비", amount: "3,000만원", description: "주방 기기 및 설비" },
    { item: "가구/집기", amount: "2,000만원", description: "테이블, 의자 등 가구류" },
    {
      item: "총 창업 금액",
      amount: currentStore.totalCost,
      description: "전체 창업 소요 비용",
      highlight: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
    
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24 relative">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    {/* 이전 버튼 - 왼쪽 위 고정 */}
    <Link 
      href="/"
      className="absolute left-4 md:left-6 top-4 md:top-6 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors z-10"
    >
      <ChevronLeft className="w-5 h-5" />
    
    </Link>
    
    {/* 제목 - 가운데 정렬 */}
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-red-600">인테리어 안내</h1>
      <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
        프리미엄 짬뽕클릭 매장의 인테리어 과정과 창업 비용을 안내해드립니다
      </p>
    </div>
  </div>
</section>

        {/* Interior Stage Gallery */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif">매장 선택</h2>
              <div className="flex justify-center gap-4 flex-wrap">
                {storeInteriors.map((store, index) => (
                  <button
                    key={store.id}
                    onClick={() => handleStoreChange(index)}
                    className={`px-8 py-4 font-bold rounded-lg transition-all text-lg ${
                      index === selectedStore
                        ? "bg-red-600 text-white shadow-xl scale-105"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {store.name}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">
              {currentStore.name} 인테리어 단계별 진행
            </h3>

            {/* Stage Tabs */}
            <div className="flex justify-center mb-8 gap-4 flex-wrap">
              {currentStages.map((stage, index) => (
                <button
                  key={stage.id}
                  onClick={() => setCurrentStage(index)}
                  className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                    index === currentStage
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {stage.stage}
                </button>
              ))}
            </div>

            {/* Image Slider */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                <img
                  src={currentStages[currentStage].image || "/placeholder.svg"}
                  alt={currentStages[currentStage].stage}
                  className="w-full h-96 md:h-[600px] object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Stage Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 font-serif">
                    {currentStages[currentStage].stage}
                  </h3>
                  <p className="text-lg md:text-xl">{currentStages[currentStage].description}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  aria-label="Previous stage"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  aria-label="Next stage"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {currentStages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentStage ? "bg-red-600 w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Go to stage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif">
              {currentStore.name} 창업 비용 안내
            </h2>
            <p className="text-center text-gray-600 mb-12">
              총 평수: {currentStore.area} / 평당 단가: {currentStore.unitPrice}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {costBreakdown.map((cost, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transition-all hover:shadow-xl ${
                    cost.highlight
                      ? "bg-red-600 text-white md:col-span-2"
                      : "bg-white border-2 border-gray-200 hover:border-red-600"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-xl font-bold ${cost.highlight ? "text-white" : "text-gray-800"}`}>
                      {cost.item}
                    </h3>
                    <span className={`text-2xl font-bold ${cost.highlight ? "text-white" : "text-red-600"}`}>
                      {cost.amount}
                    </span>
                  </div>
                  <p className={`text-sm ${cost.highlight ? "text-white/90" : "text-gray-600"}`}>{cost.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-8 bg-white rounded-lg shadow-lg border-2 border-red-600">
              <h3 className="text-2xl font-bold mb-4 text-red-600 text-center">포함 사항</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">🏗️</div>
                  <h4 className="font-bold mb-2">인테리어 공사</h4>
                  <p className="text-sm text-gray-600">바닥, 벽, 천장 마감재 및 조명 설치</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🍳</div>
                  <h4 className="font-bold mb-2">주방 설비</h4>
                  <p className="text-sm text-gray-600">냉장고, 조리대, 후드, 가스레인지 등</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🪑</div>
                  <h4 className="font-bold mb-2">가구/집기</h4>
                  <p className="text-sm text-gray-600">테이블, 의자, 식기류, 주방용품</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                창업 상담 신청하기 →
              </button>
              <p className="mt-4 text-gray-600">자세한 상담을 원하시면 언제든 연락주세요</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
