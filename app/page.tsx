export default function Page() {
  const screenshots = {
    sales: "/sales-table.png",
    gallery: "/gallery.png",
    calendar: "/calendar.png",
    category: "/category.png",
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
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

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              템플릿 구매하기
            </button>

            <button className="px-7 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition">
              미리보기 보기
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Features */}
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
              img: screenshots.sales,
            },
            {
              title: "상품 갤러리",
              desc: "판매 상품을 카드 형식으로 깔끔하게 정리",
              img: screenshots.gallery,
            },
            {
              title: "월별 판매 캘린더",
              desc: "판매 일정을 캘린더로 시각화",
              img: screenshots.calendar,
            },
            {
              title: "카테고리 분석",
              desc: "신발, 의류, 전자제품 등 카테고리별 분석",
              img: screenshots.category,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-[1.02] transition duration-500"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
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

            <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition">
              지금 시작하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}