"use client"

import { useState } from "react"
import Image from "next/image"

const menuItems = [
  {
    id: 1,
    name: "클릭 짬뽕",
    description: "매콤하고 진한 국물에 해산물과 야채가 가득한 시그니처 메뉴",
    image: "/zzam02.jpg",
    price: "11,000원",
    category: "짜장&짬뽕",
    tags: ["인기", "시그니처"],
    badge: "짜장&짬뽕",
  },
  {
    id: 2,
    name: "등심 탕수육",
    description: "바삭한 튀김옷과 새콤달콤한 소스가 어우러진 정통 탕수육",
    image: "/tangsu.jpeg",
    price: "17,000원",
    category: "요리",
    tags: ["인기", "프리미엄"],
    badge: "요리",
  },
  {
    id: 3,
    name: "짜장면",
    description: "진한 춘장 소스에 고기와 야채가 어우러진 클래식 짜장면",
    image: "/jajang.jpeg",
    price: "7,000원",
    category: "짜장&짬뽕",
    tags: ["인기"],
    badge: "짜장&짬뽕",
  },
  {
    id: 4,
    name: "게살 볶음밥",
    description: "짜장과 볶음밥을 함께 먹을 수 있습니다.",
    image: "/bokk.jpeg",
    price: "10,000원",
    category: "요리",
    tags: ["인기"],
    badge: "요리",
  },
  {
    id: 5,
    name: "군만두",
    description: "고소하고 바삭한 겉면과 육즙 가득한 속이 일품인 구운 만두",
    image: "/mando.jpeg",
    price: "7,500원",
    category: "사이드",
    tags: ["튀김"],
    badge: "사이드",
  },
  {
    id: 6,
    name: "순두부+수제비",
    description: "신선한 해산물과 야채를 곁들인 시원한 냉채 요리",
    image: "/sunsu.jpeg",
    price: "12,000원",
    category: "짬뽕 스페셜",
    tags: ["프리미엄", "건강식"],
    badge: "짬뽕 스페셜",
  },
  {
    id: 7,
    name: "순두부 짬뽕밥",
    description: "순두부와 짬뽕밥을 함께 먹을 수 있습니다.",
    image: "/jj03.jpeg",
    price: "11,000원",
    category: "짬뽕 스페셜",
    tags: [],
    badge: "짬뽕 스페셜",
  },
  {
    id: 8,
    name: "짬짜면",
    description: "짜장면과 짬뽕을 함께 즐길 수 있습니다.",
    image: "/jjamjja.jpeg",
    price: "12,000원",
    category: "짜장&짬뽕",
    tags: ["인기"],
    badge: "짜장&짬뽕",
  },
  {
    id: 9,
    name: "인절미 탕수육",
    description: "인절미의 고소함을 느끼실 수 있습니다.",
    image: "/injulmi.jpeg",
    price: "19,000원",
    category: "요리",
    tags: ["인기"],
    badge: "요리",
  },
  {
    id: 10,
    name: "숙주 짬뽕",
    description: "인절미의 고소함을 느끼실 수 있습니다.",
    image: "/sun.jpeg",
    price: "11,500원",
    category: "짬뽕 스페셜",
    tags: ["인기"],
    badge: "짬뽕 스페셜",
  },
  {
    id: 11,
    name: "수제비 짬뽕",
    description: "인절미의 고소함을 느끼실 수 있습니다.",
    image: "/sunsun.jpeg",
    price: "11,500원",
    category: "짬뽕 스페셜",
    tags: ["인기"],
    badge: "짬뽕 스페셜",
  },
]

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("짜장&짬뽕")

  const categories = ["짜장&짬뽕","짬뽕 스페셜","요리", "사이드"]

  const filteredItems = menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="py-20 px-4 bg-background">
       <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-10 py-4 text-lg rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-muted text-foreground hover:bg-red-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-44 md:h-80">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />

                {/* 좌상단 녹색/주황색 라벨 */}
                {item.tags.includes("튀김") && (
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-green-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded text-xs md:text-sm font-semibold">
                    튀김
                  </div>
                )}

                {/* 우상단 카테고리 태그 */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-red-600 text-white px-2 py-0.5 md:px-4 md:py-1 rounded text-xs md:text-sm font-semibold">
                  {item.badge}
                </div>
              </div>

              <div className="p-3 md:p-6">
                {/* 작은 태그들 */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow-400 text-foreground px-2 py-0.5 md:px-3 md:py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 메뉴 이름 */}
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">{item.name}</h3>

                {/* 설명 */}
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* 가격 & 버튼 */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-lg md:text-2xl font-bold text-red-600">{item.price}</span>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
