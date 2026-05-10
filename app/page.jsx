"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function ResellLandingPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const screenshots = [
    "/sales-management.png",
    "/gallery.png",
    "/sales-calendar.png",
    "/analysis.png",
  ];

  const handleSubmit = () => {
    navigator.clipboard.writeText("davidsix06");

    alert(
      "Discord 아이디가 복사되었습니다.\n입금 후 Discord로 연락해주세요."
    );
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b0903] via-[#8a2e10] to-black" />

        {/* GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[180px] rounded-full" />

        {/* PC FLOATING IMAGES */}
        <img
          src="/airpods.png"
          alt="airpods"
          className="hidden md:block absolute top-[180px] left-[4%] w-40 rotate-[-12deg] opacity-80"
        />

        <img
          src="/shoe.png"
          alt="shoe"
          className="hidden md:block absolute top-[260px] right-[5%] w-52 rotate-[10deg] opacity-80"
        />

        <img
          src="/iphone.png"
          alt="iphone"
          className="hidden md:block absolute bottom-[120px] left-[12%] w-36 rotate-[12deg] opacity-70"
        />

        {/* MOBILE FLOATING IMAGES */}
        <img
          src="/airpods.png"
          alt="airpods"
          className="block md:hidden absolute top-[110px] right-[-20px] w-20 rotate-[15deg] opacity-60"
        />

        <img
          src="/iphone.png"
          alt="iphone"
          className="block md:hidden absolute bottom-[260px] left-[-10px] w-16 rotate-[-12deg] opacity-50"
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 pt-24 md:pt-36 text-center">
          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-white/50 mb-6">
            notion template for resellers
          </p>

          <h1 className="text-[52px] md:text-[140px] font-black leading-[0.88] tracking-[-0.06em]">
            keep it
            <br />
            simple.
          </h1>

          <p className="mt-7 text-sm md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            판매 관리, 수익 분석,
            <br className="md:hidden" />
            재고 정리를 하나의 노션 시스템으로.
          </p>

          {/* PRICE */}
          <div className="mt-9 flex items-end justify-center gap-3">
            <span className="text-lg md:text-2xl line-through text-white/30">
              ₩25,000
            </span>

            <span className="text-5xl md:text-7xl font-black text-green-400 tracking-[-0.05em]">
              ₩5,000
            </span>
          </div>

          {/* BUTTON */}
          <div className="mt-8">
            <button
              onClick={() => setOpen(true)}
              className="w-full md:w-auto bg-white text-black rounded-full px-10 py-4 font-bold text-base md:text-lg hover:scale-[1.03] transition duration-300 shadow-2xl"
            >
              템플릿 구매하기
            </button>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-16 md:mt-24 relative">
            <div className="absolute inset-0 bg-orange-500/20 blur-[80px]" />

            <div className="relative rounded-[26px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/sales-management.png"
                alt="dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 py-24 md:py-32">
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.3em] text-orange-400 text-xs md:text-sm mb-4">
            features
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-tight">
            리셀 관리에 필요한
            <br />
            모든 기능
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg">
            보기 쉽고 감각적인 리셀 판매 관리 시스템.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "전체 판매 관리",
              desc: "매출과 수익률을 한눈에 확인",
              img: screenshots[0],
            },
            {
              title: "상품 갤러리",
              desc: "상품을 카드 형식으로 정리",
              img: screenshots[1],
            },
            {
              title: "월별 판매 캘린더",
              desc: "판매 일정을 직관적으로 관리",
              img: screenshots[2],
            },
            {
              title: "카테고리 분석",
              desc: "카테고리별 판매 흐름 분석",
              img: screenshots[3],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white/[0.03] border border-white/10 rounded-[28px] overflow-hidden hover:-translate-y-1 transition duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                />
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-2xl md:text-3xl font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/60 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEW SECTION */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 pb-24 md:pb-32">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-400 text-xs md:text-sm mb-4">
            reviews
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-tight">
            실제 구매 후기
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg">
            실제 사용자들이 남긴 후기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "김xx",
              age: "19세",
              review:
                "원래 메모장으로 정리하다가 너무 귀찮았는데 이거 쓰고 판매 정리 진짜 편해졌어요. 디자인도 깔끔해서 계속 쓰게됨.",
            },
            {
              name: "박xx",
              age: "21세",
              review:
                "노션 처음 써보는데도 어렵지 않았고 수익 계산 자동으로 되는 게 진짜 편함. 가격도 솔직히 혜자 느낌.",
            },
            {
              name: "이xx",
              age: "18세",
              review:
                "리셀 기록 맨날 밀렸는데 이걸로 정리 습관 생김. 모바일에서도 보기 편해서 좋았음.",
            },
            {
              name: "최xx",
              age: "22세",
              review:
                "디자인 때문에 구매했는데 생각보다 기능이 많아서 놀람. 카테고리 분석 기능 은근 유용함.",
            },
            {
              name: "정xx",
              age: "20세",
              review:
                "처음엔 그냥 감성 템플릿인 줄 알았는데 실제로 판매 관리할 때 꽤 도움됨. 리셀하는 친구들한테도 추천함.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6 md:p-7"
            >
              <div className="flex gap-1 text-yellow-400 text-lg mb-5">
                ★★★★★
              </div>

              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                “{item.review}”
              </p>

              <div className="mt-6">
                <p className="font-bold text-lg">
                  {item.name}
                </p>

                <p className="text-white/40 text-sm">
                  {item.age}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-6 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto relative rounded-[32px] md:rounded-[50px] overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b0903] via-[#a33d18] to-[#2b0903]" />

          <div className="relative z-10 text-center px-6 py-20 md:py-28">
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9]">
              지금 시작하세요.
            </h2>

            <p className="mt-6 text-white/70 max-w-xl mx-auto leading-relaxed text-sm md:text-lg">
              지금 바로 리셀 판매 시스템을 시작하세요.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-10 w-full md:w-auto bg-white text-black rounded-full px-10 py-4 font-bold text-base md:text-lg hover:scale-[1.03] transition duration-300"
            >
              구매하기
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-4">
          <div className="bg-white text-black rounded-[32px] overflow-hidden max-w-md w-full shadow-2xl">
            <div className="bg-gradient-to-r from-[#2b0903] via-[#8a2e10] to-[#2b0903] text-white text-center py-10">
              <h2 className="text-4xl font-black tracking-[-0.05em]">
                keep it simple.
              </h2>
            </div>

            <div className="p-7">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">
                  아래 계좌로 입금해주세요
                </p>

                <p className="text-2xl font-black tracking-[-0.03em]">
                  3521911012723
                </p>

                <p className="mt-1 text-lg">
                  지승현
                </p>
              </div>

              <div className="mt-7 rounded-[28px] bg-black text-white p-6 text-center">
                <p className="text-xs tracking-[0.3em] text-white/50 mb-3">
                  DISCORD
                </p>

                <p className="text-3xl font-black tracking-[-0.04em]">
                  davidsix06
                </p>

                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  입금 후 디스코드로
                  <br />
                  이메일과 입금자명을 보내주세요.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-black text-white rounded-full py-4 font-bold hover:opacity-90 transition duration-300"
              >
                디스코드 아이디 복사
              </button>

              <button
                onClick={() => setOpen(false)}
                className="w-full py-4 text-gray-500"
              >
                닫기
              </button>

              <div className="mt-5 text-xs text-gray-400 leading-relaxed">
                <details>
                  <summary className="cursor-pointer">
                    환불정책 및 저작권 안내
                  </summary>

                  <div className="mt-3 space-y-3">
                    <p>
                      디지털 콘텐츠 특성상 구매 후 환불은 불가합니다.
                    </p>

                    <p>
                      무단 공유 및 재판매를 금지합니다.
                    </p>

                    <p>
                      2차 배포 적발 시 법적 책임이 발생할 수 있습니다.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}