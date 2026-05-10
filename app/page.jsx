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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-orange-700 to-red-900 opacity-90" />

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-red-500/20 blur-[120px] rounded-full" />

        {/* FLOATING IMAGES */}
        <img
          src="/airpods.png"
          alt="airpods"
          className="absolute top-[180px] left-[5%] w-32 md:w-44 rotate-[-10deg]"
        />

        <img
          src="/shoe.png"
          alt="shoe"
          className="absolute top-[250px] right-[6%] w-40 md:w-52 rotate-[8deg]"
        />

        <img
          src="/iphone.png"
          alt="iphone"
          className="absolute bottom-[120px] left-[12%] w-28 md:w-40 rotate-[10deg]"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-5">
            notion template for resellers
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
            keep it simple.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed">
            복잡한 판매 기록과 정산을 하나의 노션 시스템으로 관리하세요.
            <br />
            <br />
            리셀 판매 관리, 수익 분석, 상품 정리까지 한 번에.
          </p>

          {/* PRICE */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="text-2xl line-through text-white/40">
              ₩25,000
            </span>

            <span className="text-5xl font-black text-green-400">
              ₩5,000
            </span>
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition"
            >
              템플릿 구매하기
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24">
          <div className="rounded-[40px] overflow-hidden border border-white/10">
            <img
              src="/sales-management.png"
              alt="dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-orange-400 uppercase tracking-[0.2em] text-sm mb-4">
            features
          </p>

          <h2 className="text-5xl font-black mb-6">
            리셀 관리에 필요한 모든 기능
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            판매 관리부터 수익 분석까지,
            보기 쉽고 감각적인 노션 시스템.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03] hover:-translate-y-2 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-white/60">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-[40px] overflow-hidden border border-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-orange-700 to-red-900" />

          <div className="relative z-10 px-8 py-24 text-center">
            <h2 className="text-5xl font-black mb-6">
              keep it simple.
            </h2>

            <p className="max-w-2xl mx-auto text-white/75 text-lg mb-10 leading-relaxed">
              리셀 판매 관리를 더 쉽고 감각적으로.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition"
            >
              지금 시작하기
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="bg-white text-black rounded-[32px] overflow-hidden max-w-md w-full mx-4">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-red-950 via-orange-700 to-red-900 text-white text-center py-10">
              <h2 className="text-4xl font-black">
                keep it simple.
              </h2>
            </div>

            <div className="p-8">
              {/* ACCOUNT */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-500 mb-2">
                  아래 계좌로 입금해주세요
                </p>

                <p className="text-2xl font-black">
                  3521911012723
                </p>

                <p className="text-lg mt-1">
                  지승현
                </p>
              </div>

              {/* DISCORD */}
              <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-black p-6 mb-6 text-center">
                <p className="text-sm text-orange-300 uppercase tracking-[0.2em] mb-3">
                  DISCORD
                </p>

                <p className="text-3xl font-black text-white mb-3">
                  davidsix06
                </p>

                <p className="text-sm text-white/70 leading-relaxed">
                  입금 후 디스코드 친구추가 후
                  <br />
                  이메일과 입금자명을 보내주세요
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 rounded-2xl bg-black text-white font-bold hover:opacity-90 transition mb-3"
              >
                디스코드 아이디 복사
              </button>

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 text-gray-500"
              >
                닫기
              </button>

              {/* POLICY */}
              <div className="mt-6 text-sm text-gray-400 leading-relaxed">
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