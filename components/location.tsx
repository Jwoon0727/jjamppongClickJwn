"use client"

import { useState, useEffect } from "react"

export function Location() {
  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean
    message: string
  }>({ isOpen: false, message: "확인 중..." })

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const day = now.getDay() // 0 = 일요일, 1 = 월요일, ..., 6 = 토요일
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const currentTime = hours * 60 + minutes

      // 매주 화요일 휴무
      if (day === 2) {
        setCurrentStatus({
          isOpen: false,
          message: "휴무일입니다",
        })
        return
      }

      const openTime = 10 * 60 + 30 // 10:30
      const lastOrderTime = 15 * 60 // 15:00
      const closeTime = 15 * 60 + 30 // 15:30
      const threeHoursBeforeOpen = openTime - 180 // 3시간 = 180분 (7:30)

      if (currentTime >= openTime && currentTime < lastOrderTime) {
        setCurrentStatus({
          isOpen: true,
          message: "영업중",
        })
      } else if (currentTime >= lastOrderTime && currentTime < closeTime) {
        setCurrentStatus({
          isOpen: true,
          message: "라스트오더 마감",
        })
      } else if (currentTime >= threeHoursBeforeOpen && currentTime < openTime) {
        setCurrentStatus({
          isOpen: false,
          message: "영업 시작전",
        })
      } else {
        setCurrentStatus({
          isOpen: false,
          message: "영업 종료",
        })
      }
    }

    checkStatus()
    // 1분마다 상태 업데이트
    const interval = setInterval(checkStatus, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="location" className="py-20 px-4 bg-muted/30">
      <div className="max-auto-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">찾아오시는 길</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="space-y-4">
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=36.84187,127.15201&hl=ko&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <button
              onClick={() => window.open("https://map.naver.com/p/search/충남 천안시 서북구 부대동 943", "_blank")}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              네이버 지도로 보기
            </button>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">짬뽕클릭</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-red-600 font-semibold min-w-fit">주소</span>
                  <p className="text-muted-foreground">
                  충남 천안시 서북구 부대동 943
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 font-semibold min-w-fit">전화</span>
                  <p className="text-muted-foreground">041-902-2600</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 font-semibold min-w-fit">영업시간</span>
                  <div className="text-muted-foreground">
                    <div className="flex items-center gap-3 mb-4 p-3 bg-background rounded-lg border-2 border-muted">
                      <span
                        className={`inline-block w-3 h-3 rounded-full animate-pulse ${
                          currentStatus.isOpen ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <span className={`text-lg font-bold ${currentStatus.isOpen ? "text-green-600" : "text-red-600"}`}>
                        {currentStatus.message}
                      </span>
                    </div>
                    <p>월, 수-일: 10:30 - 15:30</p>
                    <p className="text-sm text-amber-600 font-semibold">라스트오더 15:00</p>
                    <p className="text-sm mt-2 font-semibold text-red-600">매주 화요일 휴무</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
