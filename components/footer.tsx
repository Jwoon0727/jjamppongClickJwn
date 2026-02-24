import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-[140px] h-[80px] p-0 m-0">
                <Image
                  src="/logo1.png"
                  alt="짬뽕클릭 로고"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              정통 중국 짬뽕을 경험하세요
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 041-902-2600</p>
              <p>info@jjamppong.kr</p>
              <p>충남 천안시 서북구 부성9로 6</p>
            </div>
          </div>
        </div>

        <div className="border-t-3 border-red-600/30 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 짬뽕클릭.</p>
        </div>
      </div>
    </footer>
  );
}
