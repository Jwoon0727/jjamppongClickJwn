export function Info() {
    return (
      <section className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cheifcooked.jpg"
            alt="짬뽕클릭 인테리어"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
  
        {/* Content */}
        <div className="relative z-10 px-4 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">짬뽕의 핵심</h2>
  
            <div className="space-y-6 text-gray-100">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-balance">
                매움이 아니라 <span className="text-red-500 font-semibold">불</span>입니다
              </p>
  
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                불을 어떻게 쓰느냐에 따라 맛은 전혀 달라집니다
              </p>
  
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-8" />
  
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                우리는 센 불에서 짧게,
                <br />
                재료가 타기 직전의 가장 맛있는 순간만을 노립니다
              </p>
  
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
                웍에서 치고 올라오는 <span className="text-red-500 font-semibold">불향</span>,<br />한 입 먹자마자 느껴지는 깊은 국물
              </p>
  
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-8" />
  
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl mx-auto italic">
                이건 레시피가 아니라 경험의 영역입니다
              </p>
  
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mt-6">
                그래서 짬뽕은 흉내 낼 수 있어도,
                <br />이 불맛은 쉽게 따라올 수 없습니다
              </p>
            </div>
          </div>
  
        
        </div>
      </section>
    )
  }
  