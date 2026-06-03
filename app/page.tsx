import Image from "next/image";

export default function Home() {

  const weekly = {
    scriptureText: 'For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit.',
    scriptureRef: "Hebrews 4:12 · This Week's Verse",
    saint: {
      name: "St. Joan of Arc",
      date: "May 30 · Feast Day",
      bio: "Mystic, martyr, and Maid of Orléans. She heard voices at thirteen and died at nineteen, never doubting the divine call she had received.",
    },
    readings: [
      { ref: "1 Kings 8:41–43", title: "Solomon's prayer for the foreigner at the temple" },
      { ref: "Galatians 1:1–2", title: "Paul's opening salvo to the churches of Galatia" },
      { ref: "Luke 7:1–10",    title: "The centurion's faith astonishes Jesus" },
    ],
    discussion: {
      title: "Does God still speak today — and if so, how do we discern His voice?",
      description: "From prophecy to conscience to scripture — Christians have long disagreed on how (or whether) God communicates directly with His people. This week we are sitting with that question together.",
      prompt: "\"Speak, Lord, for your servant hears.\" — 1 Sam 3:9. But what does hearing actually look like in ordinary life?",
      replies: 47,
      closes: "Closes Sunday",
      image: "/HolyTrinity.jpg"
    },
  };

  const essays = [
    { category: "Hermeneutics",      title: "On the Silence of God in the Book of Esther",        mins: 12 },
    { category: "Christology",       title: "The Two Natures of Christ in Chalcedonian Thought",   mins: 8  },
    { category: "Mysticism",         title: "Apophatic Theology: What We Cannot Say of God",       mins: 10 },
    { category: "NT Studies",        title: "Reading Paul Against the Empire",                     mins: 6  },
  ];

  return (
    <main className="bg-[#080808] min-h-screen mt-[72px]">
      {/* MastHead */}
      <div className="text-center pt-10 px-10">
        <div className="h-[2px] bg-white/50"/>
        <div className="h-px bg-white/[.18] mt-2"/>
        <div className="h-20  py-5 text-7xl font-cinzel tracking-[.5rem] font- text-white/60 mb-5">Studying Faith</div>
        <p className="font-cinzel tracking-[.4rem] pb-3 text-xs uppercase text-white/30">Discussions · Essays · Readings</p>
        <div className="h-[2px] bg-white/[.18] "/>
      </div>
      {/*LinkBar */}
      <div className="mb-10 m-0 px-10">
        <ul className="flex justify-center list-none gap-">
          {["Essays","Discussions","Account","Weekly","References"].map((item) => (
            <li key={item} className="last:border-r-0 border-r border-white/20">
              <a className="flex px-8 items-center justify-center px-6 py-[.45rem] font-cinzel text-xs text-white/[.22] hover:text-white/60 transition-colors no-underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="h-px bg-white/[.18]"/>
      </div>
      {/*Scripture section*/}
      <div className="text-center text-2xl font-garamond text-white/[.4] italic px-20">
          <p>"{weekly.scriptureText}"</p>
          <p className=" text-center pt-6 text-white/[.18] font-cinzel text-sm tracking-widest">{weekly.scriptureRef}</p>
      </div>
      {/*3 Columns (5 items needed)*/}
      <div className="grid grid-cols-[1fr_1px_1.7fr_1px_1fr] border-t border-b mt-20 items-stretch border-white/[.22] px-10">
        {/*Left Column*/}
          <div className=" mt-10 mr-10 pb-10">
            <p className=" border-b mb-5 pb-3 font-cinzel uppercase text-sm  text-[rgba(190,165,105,0.6)]">This week</p>
            <p className="font-cinzel text-xl font-bold text-white/[.6] tracking-wider">{weekly.saint.name}</p>
            <p className="text-[rgba(190,165,105,0.6)] font-cinzel text-xs">{weekly.saint.date}</p>
            <p className="text-white/[.22] font-garamond italic pt-5 ">{weekly.saint.bio}</p>
            <ul className="list-none mt-8">{weekly.readings.map((item)=>(
              <li key={item} className="mt-3">
                <a className="text-[rgba(190,165,105,0.6)] font-cinzel text-sm tracking-widest flex flex-col">
                  {item.ref}
                </a>
                <a className="font-garamond italic text-white/[.22] ">{item.title}</a>
              </li>
            ))}</ul>
          </div>
        {/*Divider*/}
          <div className="bg-white/[.22]"/>
        {/*Middle Column*/}
          <div className="px-10 pb-10 mt-10">
            <p className=" border-b mb-5 pb-3 font-cinzel uppercase text-sm  text-[rgba(63,104,53,0.6)]">Featured Discussion This Week</p>
            <div className="w-full h-70 border border-white/[.22] relative">
              <Image src={weekly.discussion.image} fill alt="discussion" className="object-cover " />
            </div>
            <p className=" text-xl font-cinzel text-white/[.6] font-medium pt-5">{weekly.discussion.title}</p>
            <p className="text-lg font-garamond italic text-white/[.22] pt-1">{weekly.discussion.description}</p>
            <p className="text-sm text-[rgba(63,104,53,0.6)] font-cinzel pt-5">{weekly.discussion.replies} Replies so far · {weekly.discussion.closes}</p>
            <div>
              <button className="border"></button>
            </div>
          </div>
        {/*Divider */}
          <div className="bg-white/[.22]"/>
        {/*Right Column*/}
          <div className="px-10 pb-10 mt-10">
            <p className=" border-b mb-5 pb-3 font-cinzel uppercase text-sm  text-[rgba(37,100,172,0.6)]">Selected Essays</p>
            <ul>{essays.map((item)=>(
              <li key={item} className="flex-col mb-5 border-t  first:border-t-0">
                <span className="flex flex-col text-[rgba(37,100,172,0.6)] font-cinzel text-sm mt-5">
                  {item.category}
                </span>
                <span className="text-white/[.60] font-garamond flex flex-col ">{item.title}</span>
                <span className="text-white/[.22] font-cinzel text-xs ">{item.mins} min Read</span>
              </li>
            ))}</ul>
          </div>
      </div>


    </main>
  );
}