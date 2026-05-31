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
      { ref: "1 Kgs 8:41–43", title: "Solomon's prayer for the foreigner at the temple" },
      { ref: "Galatians 1:1–2", title: "Paul's opening salvo to the churches of Galatia" },
      { ref: "Luke 7:1–10",    title: "The centurion's faith astonishes Jesus" },
    ],
    discussion: {
      title: "Does God still speak today — and if so, how do we discern His voice?",
      description: "From prophecy to conscience to scripture — Christians have long disagreed on how (or whether) God communicates directly with His people. This week we are sitting with that question together.",
      prompt: "\"Speak, Lord, for your servant hears.\" — 1 Sam 3:9. But what does hearing actually look like in ordinary life?",
      replies: 47,
      closes: "Discussion closes Sunday",
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
      <div className="text-center py-10 px-10">
        <div className="h-[2px] bg-white/50"/>
        <div className="h-px bg-white/[.18] mt-2"/>
        <div className="h-20  py-5 text-7xl font-cinzel tracking-[.5rem] font-bold text-white/60 mb-5">Studying Faith</div>
        <p className="font-cinzel tracking-[.4rem] pb-3 text-xs uppercase text-white/30">Discussions · Essays · Resources</p>
        <div className="h-[2px] bg-white/[.18]"/>
      </div>
      {/*Scripture section*/}
      <div className="text-center text-2xl font-garamond text-white/[.4] italic px-20">
          <p>"{weekly.scriptureText}"</p>
      </div>
      <div className=" text-center pt-6 text-white/[.18] font-cinzel text-sm tracking-widest">

      </div>
    </main>
  );
}