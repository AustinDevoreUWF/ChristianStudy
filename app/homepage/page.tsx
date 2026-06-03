  return (
    <main className="bg-[#080808] min-h-screen mt-[72px]">

      {/* ── Masthead ── */}
      <div className="text-center px-10 pt-8">
        <div className="h-px bg-white/30" />
        <div className="h-px bg-white/[0.07] mt-[3px]" />
        <h1 className="font-cinzel text-5xl font-medium text-white/[0.68] tracking-[0.18em] py-5">
          Studying Faith
        </h1>
        <p className="font-cinzel text-[0.5rem] tracking-[0.3em] uppercase text-white/[0.18] pb-3">
          Essays · Discussion · Weekly Readings
        </p>
        <div className="h-px bg-white/[0.07]" />

        {/* Nav */}
        <ul className="flex justify-center list-none m-0 p-0">
          {["Essays","Discussion","Weekly","Saints","Scripture","Archive"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block px-5 py-[0.45rem] font-cinzel text-[0.5rem] tracking-[0.18em] uppercase text-white/[0.22] border-r border-white/[0.06] hover:text-white/60 transition-colors no-underline last:border-r-0"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="h-px bg-white/[0.07]" />
      </div>

      {/* ── Scripture Banner ── */}
      <div className="text-center px-14 py-8 border-b border-white/[0.07]">
        <p className="font-garamond text-xl italic text-white/40 leading-relaxed">
          "{weekly.scriptureText}"
        </p>
        <span className="font-cinzel text-[0.48rem] tracking-[0.22em] uppercase text-white/[0.18] mt-3 block">
          {weekly.scriptureRef}
        </span>
      </div>

      {/* ── Three Columns ── */}
      <div className="grid grid-cols-[1fr_1px_1.7fr_1px_1fr] px-10 border-b border-white/[0.06] mb-5">

        {/* ── Left: Weekly ── */}
        <div className="py-8 pr-6">
          <span className="font-cinzel text-[0.46rem] tracking-[0.26em] uppercase text-[rgba(190,165,105,0.6)] block pb-3 mb-5 border-b border-white/[0.07]">
            This Week
          </span>

          {/* Saint */}
          <p className="font-cinzel text-base font-normal text-white/[0.58] tracking-[0.05em] mb-1">
            {weekly.saint.name}
          </p>
          <span className="font-cinzel text-[0.46rem] tracking-[0.18em] uppercase text-[rgba(190,165,105,0.45)] block mb-3">
            {weekly.saint.date}
          </span>
          <p className="font-garamond text-[0.95rem] italic leading-[1.8] text-white/[0.28]">
            {weekly.saint.bio}
          </p>

          {/* Readings */}
          <ul className="list-none mt-6 flex flex-col gap-4">
            {weekly.readings.map((r) => (
              <li key={r.ref} className="flex flex-col gap-[0.15rem]">
                <span className="font-cinzel text-[0.44rem] tracking-[0.16em] uppercase text-[rgba(190,165,105,0.45)]">
                  {r.ref}
                </span>
                <span className="font-garamond text-[0.88rem] italic text-white/[0.35] leading-snug">
                  {r.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="bg-white/[0.06]" />

        {/* ── Center: Featured Discussion ── */}
        <div className="py-8 px-6">
          <span className="font-cinzel text-[0.46rem] tracking-[0.26em] uppercase text-[rgba(140,180,150,0.6)] block pb-3 mb-5 border-b border-white/[0.07]">
            Featured Discussion This Week
          </span>

          {/* Angel image */}
          <div className="border border-white/[0.06] bg-white/[0.02] h-24 flex items-center justify-center mb-5">
            {/* swap this div for your Image once wired up */}
            {/* <Image src="/angelTransparent.png" width={400} height={96} alt="angel" className="object-cover w-full h-full opacity-30" /> */}
            <span className="font-cinzel text-[0.44rem] tracking-[0.14em] text-white/10">
              angelTransparent.png
            </span>
          </div>

          <span className="font-cinzel text-[0.44rem] tracking-[0.22em] uppercase text-[rgba(140,180,150,0.55)] block mb-2">
            This Week's Topic
          </span>
          <h2 className="font-cinzel text-[1.35rem] font-normal text-white/[0.62] tracking-[0.04em] leading-[1.25] mb-4">
            {weekly.discussion.title}
          </h2>
          <p className="font-garamond text-base italic leading-[1.9] text-white/[0.28] mb-4">
            {weekly.discussion.description}
          </p>
          <div className="border-l border-white/10 pl-4 my-4">
            <p className="font-garamond text-[0.9rem] italic text-white/[0.38] leading-[1.7]">
              {weekly.discussion.prompt}
            </p>
          </div>
          <div className="flex gap-5 items-center mt-3">
            <span className="font-cinzel text-[0.44rem] tracking-[0.16em] uppercase text-[rgba(140,180,150,0.55)]">
              {weekly.discussion.replies} replies so far
            </span>
            <span className="font-cinzel text-[0.44rem] tracking-[0.14em] text-white/[0.15]">
              {weekly.discussion.closes}
            </span>
          </div>
          <button className="w-full mt-5 font-cinzel text-[0.46rem] tracking-[0.2em] uppercase text-white/30 border border-white/10 bg-transparent py-[0.55rem] cursor-pointer hover:text-white/60 hover:border-white/30 transition-all">
            Join the Discussion →
          </button>
        </div>

        {/* Divider */}
        <div className="bg-white/[0.06]" />

        {/* ── Right: Essays ── */}
        <div className="py-8 pl-6">
          <span className="font-cinzel text-[0.46rem] tracking-[0.26em] uppercase text-[rgba(140,170,200,0.6)] block pb-3 mb-5 border-b border-white/[0.07]">
            Essays
          </span>

          <div className="flex flex-col">
            {essays.map((e, i) => (
              <div
                key={e.title}
                className={`py-4 ${i < essays.length - 1 ? "border-b border-white/[0.05]" : ""}`}
              >
                <span className="font-cinzel text-[0.42rem] tracking-[0.16em] uppercase text-[rgba(140,170,200,0.5)] block mb-1">
                  {e.category}
                </span>
                <p className="font-garamond text-[0.95rem] text-white/50 leading-snug">
                  {e.title}
                </p>
                <span className="font-cinzel text-[0.42rem] tracking-[0.12em] text-white/[0.15] mt-1 block">
                  {e.mins} min read
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Footer ── */}
      <div className="flex justify-between items-center px-10 py-4 border-t border-white/[0.06]">
        <span className="font-cinzel text-[0.44rem] tracking-[0.16em] uppercase text-white/[0.13]">
          © Studying Faith
        </span>
        <span className="font-garamond text-[0.8rem] italic text-white/[0.17]">
          "Speak, Lord, for your servant hears." — 1 Samuel 3:9
        </span>
        <span className="font-cinzel text-[0.44rem] tracking-[0.16em] uppercase text-white/[0.13]">
          All rights reserved
        </span>
      </div>

    </main>
  );
