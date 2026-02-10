export function Info() {
  return (
    <section className="py-3 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-30">
        {/* Content - Image */}
        <div className="relative h-full flex items-center justify-center">
          {/* Thin Black Wrapper */}
          <div className="bg-black/50 p-[1px] rounded-xl">
            <img
              src="/info02.png"
              alt="짬뽕클릭 소개"
              className="w-full h-auto object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
