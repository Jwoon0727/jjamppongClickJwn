"use client"

import { Flame } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      },
    )

    if (cardsRef.current) {
      observer.observe(cardsRef.current)
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">짬뽕클릭에 대해</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-60 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/cooked.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

         





          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                이 가게는 거창하게 시작하지 않았습니다.
              </p>
              
              <div className="relative pl-6 border-l-4 border-red-600">
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "속 풀릴 짬뽕 한 그릇 먹고 싶다"
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  그 한마디에서 모든 것이 시작되었습니다.
                </p>
              </div>
            </div>

            <div className="space-y-4 py-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                퇴근길에, 비 오는 날에,<br />
                괜히 매운 게 당기는 날에<br />
                <span className="text-foreground font-semibold">편하게 들어와 먹을 수 있는 곳.</span>
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-red-600 font-semibold">국물 한 숟갈</span>로 한숨을 내려놓고<br />
                <span className="text-red-600 font-semibold">면 한 젓가락</span>으로 하루를 정리하는 곳이었으면 했습니다.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-transparent p-6 rounded-lg border-l-4 border-red-600">
              <p className="text-lg text-foreground leading-relaxed mb-3">
                그래서 오늘도 <span className="font-bold text-red-600">재료는 아끼지 않고</span><br />
                <span className="font-bold text-red-600">손님은 가족처럼</span> 맞이합니다.
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground">
                동네의 하루를 책임지는 짬뽕집,<br />
                <span className="text-red-600">그게 우리의 목표입니다.</span>
              </p>
            </div>

        
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-br from-black via-zinc-900 to-black rounded-2xl p-8 md:p-12 shadow-2xl border border-red-900/20">
            <div className="text-center mb-10">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold mb-4">
                매운맛 레벨
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">당신의 한계에 도전하세요</h3>
              <p className="text-gray-400">짬뽕클릭의 매운맛은 4단계로 나뉩니다</p>
            </div>

            <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Level 1 */}
              <div
                className={`bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl p-4 border-2 border-orange-500/30 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                <div className="flex justify-center mb-3">
                  <Flame className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-orange-400 mb-1">1단계</div>
                  <div className="text-base font-serif text-white mb-1">매운맛 입성</div>
                  <div className="text-xs text-muted-foreground">(맛있게 매운맛)</div>
                </div>
              </div>

              {/* Level 2 */}
              <div
                className={`bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl p-4 border-2 border-red-500/30 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="flex justify-center mb-3 space-x-1">
                  <Flame className="w-7 h-7 text-red-500" />
                  <Flame className="w-7 h-7 text-red-500" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-red-500 mb-1">2단계</div>
                  <div className="text-base font-serif text-white mb-1">고수 매운맛</div>
                  <div className="text-xs text-muted-foreground">(청양고추를 많이 넣은듯한 매운맛)</div>
                </div>
              </div>

              {/* Level 3 */}
              <div
                className={`bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl p-4 border-2 border-red-600/30 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex justify-center mb-3 space-x-1">
                  <Flame className="w-6 h-6 text-red-600" />
                  <Flame className="w-6 h-6 text-red-600" />
                  <Flame className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600 mb-1">3단계</div>
                  <div className="text-base font-serif text-white mb-1">초인 매운맛</div>
                  <div className="text-xs text-muted-foreground">(불닭볶음면과 비슷한 매운맛)</div>
                </div>
              </div>

              {/* Level 4 */}
              <div
                className={`bg-gradient-to-b from-red-950 to-black rounded-xl p-4 border-2 border-red-700 relative overflow-hidden transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20 animate-pulse" />
                <div className="relative">
                  <div className="flex justify-center mb-3 space-x-1">
                    <Flame className="w-5 h-5 text-red-700 animate-pulse" />
                    <Flame className="w-5 h-5 text-red-700 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <Flame className="w-5 h-5 text-red-700 animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <Flame className="w-5 h-5 text-red-700 animate-pulse" style={{ animationDelay: "0.6s" }} />
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-700 mb-1">4단계</div>
                    <div className="text-base font-serif text-white mb-1">저세상 매운맛</div>
                    <div className="text-xs text-red-400 font-bold">(??????)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">* 매운맛 단계는 주문 시 선택 가능하며, 취향에 맞게 조절해드립니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
