"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function ResellLandingPage() {
  const [open, setOpen] = useState(false);

  // APPLE STYLE SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time: number) {
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
    "/sales-management.png",
  ];

  const handleSubmit = () => {
    navigator.clipboard.writeText("davidsix06");

    alert(
      "Discord 아이디가 복사되었습니다.\n입금 후 Discord로 연락해주세요."
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-orange-700 to-red-900 opacity-90" />

        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-red-500/20 blur-[140px] rounded-full" />

        {/* FLOATING PRODUCTS */}
        <img
          src="/airpods.png"
          alt="airpods"
          className="absolute top-[180px] left-[5%] w-32 md:w-44 opacity-90 rotate-[-12deg] animate-float z-20"
        />

        <img
          src="/shoe.png"
          alt="shoe"
          className="absolute top-[260px] right-[6%] w-36 md:w-52 opacity-90 rotate-[10deg] animate-float2 z-20"
        />

        <img
          src="/iphone.png"
          alt="iphone"
          className="absolute bottom-[120px] left-[12%] w-28 md:w-40 opacity-80 rotate-[8deg] animate-float3 z-20"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-5">
            notion template for resellers
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
            keep it simple.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed">
            복잡한 판매 기록과 정산을
            하나의 노션 시스템으로 관리하세요.
            <br />
            <br />
            리셀 판매 관리, 수익 분석,
            상품 정리까지 한 번에.
          </p>

          {/* 가격 */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="text-2xl text-white/40 line-through">
              ₩25,000
            </span>

            <span className="text-5xl font-black text-green-400">
              ₩5,000
            </span>
          </div>

          {/* 버튼 */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition"
            >
              ₩5,000에 시작하기
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition">
              미리보기 보기
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-20">
          <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur shadow-2xl">
            <img
              src="/sales-management.png"
              alt="dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          ["5", "관리 뷰"],
          ["100%", "다크 UI"],
          ["올인원", "리셀 관리"],
          ["Simple", "미니멀 디자인"],
        ].map(([title, sub]) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:border-orange-400/20 transition"
          >
            <div className="text-3xl font-black mb-2">{title}</div>
            <div className="text-white/60">{sub}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-14">
          <p className="text-orange-400 mb-3 uppercase tracking-[0.2em] text-sm">
            features
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            리셀 관리에 필요한
            <br />
            모든 기능.
          </h2>

          <p className="text-white/60 max-w-2xl leading-relaxed">
            복잡한 엑셀 대신,
            보기 쉬운 노션 시스템으로 판매 현황과
            수익을 직관적으로 관리할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "전체 판매 관리",
              desc: "매출, 지출, 수익률까지 한눈에 확인 가능",
              img: screenshots[0],
            },
            {
              title: "상품 갤러리",
              desc: "판매 상품을 카드 형식으로 깔끔하게 정리",
              img: screenshots[1],
            },
            {
              title: "월별 판매 캘린더",
              desc: "판매 일정을 캘린더로 시각화",
              img: screenshots[2],
            },
            {
              title: "카테고리 분석",
              desc: "신발, 의류, 전자제품 등 카테고리별 분석",
              img: screenshots[3],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03] hover:-translate-y-2 hover:border-orange-400/30 transition duration-300"
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

                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOR WHO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-orange-400 uppercase tracking-[0.2em] text-sm mb-3">
            for who
          </p>

          <h2 className="text-5xl font-black">
            이런 분들에게 추천합니다
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "판매 내역 정리가 어려운 리셀러",
            "수익 관리를 깔끔하게 하고 싶은 사람",
            "노션으로 리셀 시스템을 만들고 싶은 사람",
            "미니멀한 판매 관리 페이지가 필요한 사람",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-lg hover:border-orange-400/20 transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-orange-400 uppercase tracking-[0.2em] text-sm mb-3">
            preview
          </p>

          <h2 className="text-5xl font-black">
            실제 템플릿 화면
          </h2>
        </div>

        <div className="space-y-10">
          {screenshots.map((img, index) => (
            <div
              key={index}
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <img
                src={img}
                alt={`template-${index}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-[40px] overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-orange-700 to-red-900" />

          <div className="relative z-10 text-center px-8 py-24">
            <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-4">
              resell notion template
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              keep it simple.
            </h2>

            <p className="max-w-2xl mx-auto text-white/75 text-lg leading-relaxed mb-10">
              리셀 판매 관리에 집중할 수 있도록.
              <br />
              복잡함은 줄이고, 관리 효율은 높였습니다.
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
            {/* 배너 */}
            <div className="bg-gradient-to-r from-red-950 via-orange-700 to-red-900 text-white text-center py-10">
              <h2 className="text-4xl font-black">
                keep it simple.
              </h2>
            </div>

            <div className="p-8">
              {/* 계좌 */}
              <div className="mb-8 text-center">
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
              <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-black p-6 mb-6 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  <p className="text-sm text-orange-300 uppercase tracking-[0.2em]">
                    DISCORD ONLINE
                  </p>
                </div>

                <p className="text-3xl font-black mb-3 text-white">
                  davidsix06
                </p>

                <p className="text-sm text-white/70 leading-relaxed">
                  입금 후 친구추가하여
                  <br />
                  이메일 + 입금자명을 보내주세요
                </p>
              </div>

              {/* 버튼 */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 rounded-2xl bg-black text-white font-bold hover:opacity-90 transition mb-3"
              >
                디스코드 아이디 복사
              </button>

              {/* 닫기 */}
              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 text-gray-500"
              >
                닫기
              </button>

              {/* 환불 */}
              <div className="mt-6 text-sm text-gray-400 leading-relaxed">
                <details>
                  <summary className="cursor-pointer">
                    환불정책 및 저작권 안내
                  </summary>

                  <div className="mt-3 space-y-3">
                    <p>
                      디지털 콘텐츠 특성상 구매 후 즉시 복제가 가능하므로
                      단순 변심에 의한 환불은 불가합니다.
                    </p>

                    <p>
                      구매 완료 후 전달된 노션 템플릿 링크 및 구성 요소의
                      무단 공유, 재판매, 재배포를 금지합니다.
                    </p>

                    <p>
                      2차 배포 및 상업적 무단 사용 적발 시
                      저작권법에 따라 법적 책임이 발생할 수 있습니다.
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