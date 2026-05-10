{/* MODAL */}
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
    <div className="bg-white text-black rounded-[32px] overflow-hidden max-w-md w-full mx-4">

      {/* Banner */}
      <div className="h-40 bg-gradient-to-r from-red-900 via-orange-600 to-red-800 flex items-center justify-center">
        <h2 className="text-3xl font-black text-white">
          KEEP IT SIMPLE
        </h2>
      </div>

      <div className="p-8">
        {/* Price */}
        <div className="flex items-end gap-3 mb-6">
          <span className="text-zinc-400 line-through text-xl">
            ₩25,000
          </span>

          <span className="text-4xl font-black text-green-500">
            ₩5,000
          </span>
        </div>

        {/* Account */}
        <div className="rounded-2xl bg-zinc-100 p-5 mb-6">
          <p className="text-sm text-zinc-500 mb-2">
            입금 계좌
          </p>

          <p className="text-2xl font-black tracking-wide">
            3521911012723
          </p>

          <p className="text-lg mt-1">
            지승현
          </p>
        </div>

        {/* Email */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="전송받을 이메일을 작성해주세요"
            className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none focus:border-black transition"
          />
        </div>

        {/* Button */}
        <button className="w-full py-4 rounded-2xl bg-black text-white font-bold text-lg mb-4 hover:opacity-90 transition">
          입금 완료
        </button>

        {/* Refund */}
        <div className="rounded-2xl bg-zinc-100 p-5">
          <p className="font-bold mb-2">
            환불 정책
          </p>

          <p className="text-sm text-zinc-600 leading-relaxed">
            해당 상품은 1회 구매시 환불이 불가합니다.
          </p>
        </div>

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="w-full mt-4 py-4 rounded-2xl border border-zinc-300"
        >
          닫기
        </button>
      </div>
    </div>
  </div>
)}