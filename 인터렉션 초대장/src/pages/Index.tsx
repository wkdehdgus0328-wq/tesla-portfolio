import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const PORTFOLIO_URL =
  "https://wkdehdgus0328-wq.github.io/liner-portfolio/"; // Updated to Liner Portfolio URL

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#0A0B10] px-6 py-12">
      {/* Subtle grid texture - Updated to Purple */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(hsl(259 94% 66%) 1px, transparent 1px), linear-gradient(90deg, hsl(259 94% 66%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content — A4-like centered column */}
      <div className="relative z-10 flex w-full max-w-[680px] flex-col items-center text-center gap-12">
        {/* Header */}
        <header className="flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8B5CF6]">
            Confidential &amp; Exclusive
          </span>
          <h1 className="text-lg font-medium tracking-tight text-white sm:text-xl">
            Donghyun Jang&ensp;|&ensp;라이너(LINER) Customer Experience Manager 포트폴리오
          </h1>
        </header>

        {/* Hero copy */}
        <section className="flex flex-col items-center gap-8">
          <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Pretendard', 'Inter', sans-serif" }}>
            사용자가 신뢰하는 데이터를 넘어,<br />
            <span className="text-[#8B5CF6]">AI가 설계한 완벽한 CX</span>
            로,<br />
            라이너의 글로벌 성장을&nbsp;
            <span className="text-[#8B5CF6]">주도합니다</span>
            .
          </h2>

          {/* Description */}
          <p className="max-w-[540px] text-sm leading-relaxed text-gray-400 sm:text-base">
            본 포트폴리오는 라이너(LINER) Customer Experience Manager 직무에 맞춰 특별 제작된
            인터랙티브 웹(Web) 포트폴리오입니다. 파일 용량의 한계를 넘어,
            다양한 원본 이미지가 포함된 최상의 열람 경험을 위해
            반드시 아래 링크를 클릭하여 웹(Web)으로 확인해 주시기를 정중히 요청드립니다.
          </p>
        </section>

        {/* CTA Button - Updated to Purple */}
        <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold border-none" size="xl">
            🔗&ensp;웹 포트폴리오 바로가기 (Click)
          </Button>
        </a>
      </div>

      {/* QR Code — bottom right */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-60">
        <QrCode className="h-20 w-20 text-muted-foreground" strokeWidth={1} />
        <span className="text-[10px] tracking-wider text-muted-foreground">
          Scan to view on Mobile
        </span>
      </div>
    </div>
  );
};

export default Index;
