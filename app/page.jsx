"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function ResellLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });

    let frame;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const screenshots = [
    "/sales-management.png",
    "/gallery.png",
    "/sales-calendar.png",
    "/analysis.png",
  ];

  const copyDiscord = () => {
    navigator.clipboard.writeText("davidsix06");

    alert(
      "Discord 아이디가 복사되었습니다.\n입금 후 Discord로 연락해주세요."
    );
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b0903] via-[#8a2e10] to-black" />

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[180px] rounded-full" />

        {/* PC IMAGES */}
        <img
          src="/airpods.png"
          alt="airpods"
          className="hidden md:block absolute top-[180px] left-[4%] w-40 rotate-[-12deg] opacity-80 pointer-events-none"
        />

        <img
          src="/shoe.png"
          alt="shoe"
          className="hidden md:block absolute top-[260px] right-[5%] w-52 rotate-[10deg] opacity-80 pointer-events-none"
        />

        <img
          src="/iphone.png"
          alt="iphone"
          className="hidden md:block absolute bottom-[120px] left-[12%] w-36 rotate-[12deg] opacity-70 pointer-events-none"
        />

        {/* MOBILE IMAGES */}
        <img
          src="/airpods.png"
          alt="airpods"
          className="block md:hidden absolute top-[110px] right-[-20px] w-20 rotate-[15deg] opacity-60 pointer-events-none"
        />

        <img
          src="/iphone.png"
          alt="iphone"
          className="block md:hidden absolute bottom-[260px] left-[-10px] w-16 rotate-[-12deg] opacity-50 pointer-events-none"
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

          <p className="mt-4 text-orange-300 font-semibold text-sm md:text-base">
            당근마켓 / 번개장터 / 중고거래를 하나로 정리
          </p>

          {/* PRICE */}
          <div className="mt-9 flex items-end justify-center gap-3">
            <span className="text-lg md:text-2xl line-through text-white/30">
              ₩25,000
            </span>

            <span className="text-5xl md:text-7xl font-black text-white tracking-[-0.05em]">
              ₩5,000
            </span>
          </div>

          {/* BUTTON */}
          <div className="mt-8">
            <button
              onClick={() => setOpen(true)}
              className="w-full md:w-auto bg-orange-400 hover:bg-orange-300 text-black rounded-full px-10 py-4 font-black text-base md:text-lg hover:scale-[1.03] transition duration-300 shadow-2xl"
            >
              템플릿 구매하기
            </button>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-16 md:mt-24 relative">
            <div className="absolute inset-0 bg-orange-500/20 blur-[80px]" />

            <div className="relative rounded-[26px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="Screenshot 2026-05-10 202632.png"
                alt="dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMEND */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-400 text-xs md:text-sm mb-4">
            recommended
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-tight">
            이런 분들에게
            <br />
            추천해요
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "당근마켓 / 번개장터 판매가 많은 분",
            "판매 내역 정리가 귀찮았던 분",
            "수익 계산을 자동화하고 싶은 분",
            "노션으로 감성있게 관리하고 싶은 분",
            "중고거래를 체계적으로 하고 싶은 분",
            "메모장 / 엑셀 정리에서 벗어나고 싶은 분",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-[24px] p-6 text-white/80 text-lg"
            >
              ✔ {item}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={copyDiscord}
            className="bg-orange-400 hover:bg-orange-300 text-black rounded-full px-12 py-5 font-black text-lg hover:scale-105 transition duration-300"
          >
            지금 ₩5,000으로 시작하기
          </button>
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

      {/* REVIEW */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 pb-24 md:pb-32">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-400 text-xs md:text-sm mb-4">
            reviews
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em]">
            실제 구매 후기
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "김xx",
              age: "1x세",
              review:
                "당근이랑 번개장터 왔다갔다 하면서 맨날 헷갈렸는데 이거 쓰고 나서 정리 훨씬 편해짐.",
            },
            {
              name: "박xx",
              age: "2x세",
              review:
                "솔직히 5천원이면 밥값 반도 안되는데 그냥 이걸로 편해지는 거 선택함ㅋㅋ 생각보다 개잘씀.",
            },
            {
              name: "이xx",
              age: "1x세",
              review:
                "원래 매출이나 이익 계산 관심도 없었는데 이걸로 정리하니까 뭔가 제대로 하는 느낌남 ㅋㅋ",
            },
            {
              name: "최xx",
              age: "2x세",
              review:
                "노션 처음 써보는데도 안어려웠음. 모바일에서도 깔끔하게 보여서 계속 쓰는중.",
            },
            {
              name: "윤xx",
              age: "2x세",
              review:
                "디자인만 예쁜 줄 알았는데 실제로 리셀 관리할 때 은근 도움 많이됨.",
            },
            {
              name: "정xx",
              age: "1x세",
              review:
                "메모장으로 적다가 맨날 꼬였는데 이걸로 바꾸고 정리 스트레스 줄었음. 그리고 제작자 분이랑 디스코드로 소통도 가능해서 좋았어요.",
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
                <p className="font-bold text-lg">{item.name}</p>

                <p className="text-white/40 text-sm">{item.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-5 md:px-6 pb-24 md:pb-32">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-400 text-xs md:text-sm mb-4">
            faq
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em]">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "노션 사용법을 모르는데 사용 가능한가요 ?",
              a: "네 노션 사용방법은 메모장 만큼이나 쉬우며 성능또한 메모장보다 수십배의 성능을 자랑합니다.",
            },
            {
              q: "노션 사용방법을 모르거나 템플릿 사용방법을 모르겠다면 개인디엠을 드려도 되나요 ?",
              a: "네 언제든지 가능합니다.",
            },
            {
              q: "모바일에서도 사용 가능한가요 ?",
              a: "네 모바일 최적화도 되어있어서 휴대폰으로도 편하게 사용 가능합니다.",
            },
            {
              q: "초보자도 사용 가능한가요 ?",
              a: "네 처음 노션을 사용하는 분들도 쉽게 사용할 수 있도록 제작했습니다.",
            },
            {
              q: "구매 후 바로 사용 가능한가요 ?",
              a: "네 구매 후 즉시 템플릿 링크를 전달해드립니다.",
            },
            {
              q: "리셀 외에도 사용 가능한가요 ?",
              a: "네 중고거래, 개인 판매, 재고 정리 등 다양하게 사용 가능합니다.",
            },
            {
              q: "한번 구매하면 계속 사용 가능한가요 ?",
              a: "네 한번 구매하시면 기간 제한 없이 계속 사용 가능합니다.",
            },
            {
              q: "문의는 어디로 하나요 ?",
              a: "디스코드 개인 메시지로 언제든지 편하게 문의 가능합니다.",
            },
            {
              q: "업데이트도 해주시나요 ?",
              a: "추후 기능 개선이나 디자인 업데이트가 있을 경우 반영될 수 있습니다.",
            },
            {
              q: "복잡한 기능이 많나요 ?",
              a: "실제로 자주 사용하는 기능 위주로 최대한 깔끔하게 구성했습니다.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-[24px] p-6 md:p-7"
            >
              <h3 className="text-lg md:text-xl font-bold leading-relaxed">
                Q. {item.q}
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed text-sm md:text-base">
                A. {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="text-center mt-16">
          <button
            onClick={copyDiscord}
            className="bg-orange-400 hover:bg-orange-300 text-black rounded-full px-14 py-5 font-black text-xl hover:scale-105 transition duration-300"
          >
            ₩5,000으로 바로 시작하기
          </button>
        </div>
      </section>
            {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-5 animate-in fade-in duration-300">
          <div className="w-full max-w-md rounded-[36px] bg-white text-black overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-white/20">

            {/* TOP */}
            <div className="bg-gradient-to-b from-orange-400 to-orange-300 px-8 pt-10 pb-8 text-center">
              <p className="uppercase tracking-[0.35em] text-[11px] font-bold text-black/50 mb-3">
                purchase
              </p>

              <h2 className="text-4xl font-black tracking-[-0.06em] text-black">
                TEMPLATE
              </h2>

              <p className="mt-3 text-black/70 text-sm leading-relaxed">
                입금 후 Discord로 연락주시면
                <br />
                템플릿 링크를 바로 전달드립니다.
              </p>
            </div>

            {/* BODY */}
            <div className="p-8">

              {/* ACCOUNT */}
              <div className="rounded-[28px] bg-black text-white p-7 text-center mb-6">
                <p className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
                  account
                </p>

                <p className="text-3xl font-black tracking-[-0.04em]">
                  3521911012723
                </p>

                <p className="mt-2 text-white/70">
                  지승현
                </p>
              </div>

              {/* DISCORD */}
              <div className="rounded-[28px] border border-black/10 bg-black/[0.03] p-6 mb-6">
                <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-3">
                  discord
                </p>

                <p className="text-2xl font-black mb-2">
                  davidsix06
                </p>

                <p className="text-sm text-gray-500 leading-relaxed">
                  입금 후 Discord 친구추가 후
                  <br />
                  메시지를 보내주세요.
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText("davidsix06");

                  alert(
                    "Discord 아이디가 복사되었습니다.\n입금 후 Discord로 연락해주세요."
                  );
                }}
                className="w-full py-4 rounded-2xl bg-orange-400 hover:bg-orange-300 text-black font-black text-lg transition duration-300 hover:scale-[1.02] mb-3"
              >
                디스코드 아이디 복사
              </button>

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 text-gray-400 hover:text-black transition"
              >
                닫기
              </button>

              {/* REFUND */}
              <div className="mt-6 pt-6 border-t border-black/10 text-sm text-gray-400 leading-relaxed">
                <details>
                  <summary className="cursor-pointer font-medium">
                    환불정책 및 저작권 안내
                  </summary>

                  <div className="mt-4 space-y-3">
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
    </main>
  );
}
