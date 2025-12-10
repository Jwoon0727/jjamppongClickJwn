"use client"

import { useState } from "react"
import Image from "next/image"

const menuItems = [
  {
    id: 1,
    name: "짬뽕",
    description: "매콤하고 진한 국물에 해산물과 야채가 가득한 시그니처 메뉴",
    image: "/zzam02.jpg",
    price: "12,000원",
    category: "짜장&짬뽕",
    tags: ["인기", "시그니처"],
    badge: "짜장&짬뽕",
  },
  {
    id: 2,
    name: "탕수육",
    description: "바삭한 튀김옷과 새콤달콤한 소스가 어우러진 정통 탕수육",
    image: "/tangsu.jpeg",
    price: "28,000원",
    category: "사이드",
    tags: ["인기", "프리미엄"],
    badge: "사이드",
  },
  {
    id: 3,
    name: "짜장면",
    description: "진한 춘장 소스에 고기와 야채가 어우러진 클래식 짜장면",
    image: "/zajang.jpeg",
    price: "10,000원",
    category: "짜장&짬뽕",
    tags: ["인기"],
    badge: "짜장&짬뽕",
  },
  {
    id: 4,
    name: "볶음밥",
    description: "바삭하게 튀긴 닭고기에 달콤매콤한 소스를 곁들인 인기 메뉴",
    image: "/bokk.jpeg",
    price: "26,000원",
    category: "기타",
    tags: ["인기"],
    badge: "기타",
  },
  {
    id: 5,
    name: "군만두",
    description: "고소하고 바삭한 겉면과 육즙 가득한 속이 일품인 구운 만두",
    image: "/mando.jpeg",
    price: "8,000원",
    category: "사이드",
    tags: ["채식"],
    badge: "사이드",
  },
  {
    id: 6,
    name: "순두부+수제비짬뽕",
    description: "신선한 해산물과 야채를 곁들인 시원한 냉채 요리",
    image: "/sunsu.jpeg",
    price: "32,000원",
    category: "짬뽕 스페셜",
    tags: ["프리미엄", "건강식"],
    badge: "사이드",
  },
  {
    id: 7,
    name: "아이스크림",
    description: "부드럽고 달콤한 홈메이드 아이스크림",
    image: "/vanilla-ice-cream-in-bowl.jpg",
    price: "5,000원",
    category: "기타",
    tags: [],
    badge: "기타",
  },
  {
    id: 8,
    name: "망고 푸딩",
    description: "신선한 망고로 만든 부드럽고 달콤한 디저트",
    image: "/mango-pudding-dessert.jpg",
    price: "7,000원",
    category: "기타",
    tags: ["인기"],
    badge: "기타",
  },
]

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("짜장&짬뽕")

  const categories = ["짜장&짬뽕","짬뽕 스페셜","사이드", "기타"]

  const filteredItems = menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
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
              <div className="relative h-40 md:h-80">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />

                {/* 좌상단 녹색/주황색 라벨 */}
                {item.tags.includes("채식") && (
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-green-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded text-xs md:text-sm font-semibold">
                    채식
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
                  <button className="border border-muted-foreground text-foreground px-2 py-1 md:px-4 md:py-2 rounded hover:bg-muted transition-colors text-xs md:text-sm">
                    상세 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
