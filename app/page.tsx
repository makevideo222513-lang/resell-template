"use client";

import { useState } from "react";

export default function ResellLandingPage() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const screenshots = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
  ];

  const validateEmail = (value: string) => {
    const regex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|naver\.com|daum\.net|kakao\.com)$/;

    return regex.test(value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setDone(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-orange-700 to-red-900 opacity-90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-5">
            notion template for resellers
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
            keep it simple.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed">
            리셀러를 위한 올인원 노션 템플릿.
            판매 관리, 수익 분석, 캘린더, 카테고리별 정리까지
            한 번에 관리하세요.
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
              onClick={() => {
                setOpen(true);
                setDone(false);
              }}
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              템플릿 구매하기
            </button>

            <button className="px-7 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition">
              미리보기 보기
            </button>
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
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
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
            복잡한 엑셀 대신, 보기 쉬운 노션 시스템으로 판매 현황과
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
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
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
              복잡함은 줄이고, 관리 효율은 높였습니다.
            </p>

            <button
              onClick={() => {
                setOpen(true);
                setDone(false);
              }}
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
              {!done ? (
                <>
                  <div className="mb-6 text-center">
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

                  {/* 이메일 */}
                  <input
                    type="email"
                    placeholder="gmail / naver / daum / kakao 이메일만 가능합니다"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-2 px-5 py-4 rounded-2xl bg-black/5 border border-black/10 outline-none"
                  />

                  {emailError && (
                    <p className="text-red-500 text-sm mb-4">
                      다시 입력해주세요
                    </p>
                  )}

                  {/* 입금자명 */}
                  <input
                    type="text"
                    placeholder="입금자명을 입력해주세요"
                    className="w-full mb-6 px-5 py-4 rounded-2xl bg-black/5 border border-black/10 outline-none"
                  />

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-2xl bg-black text-white font-bold hover:opacity-90 transition"
                  >
                    입금완료
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className="w-full mt-3 py-3 text-gray-500"
                  >
                    닫기
                  </button>

                  <div className="mt-6 text-sm text-gray-400 leading-relaxed">
                    <details>
                      <summary className="cursor-pointer">
                        환불정책
                      </summary>

                      <p className="mt-3">
                        해당 상품은 1회 구매시 환불이 불가합니다.
                      </p>
                    </details>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-4xl font-black mb-4">
                    구매완료
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    입금확인 후 이메일 발송예정
                    <br />
                    5~10분 정도 소요될 수 있습니다
                  </p>

                  <button
                    onClick={() => {
                      setOpen(false);
                      setDone(false);
                    }}
                    className="mt-8 px-6 py-3 rounded-2xl bg-black text-white"
                  >
                    확인
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}