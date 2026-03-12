import Image from "next/image";
//HomePage
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/*BackGround*/}
      <div 
      className="bg-center bg-cover min-h-screen opacity-100"
      style={{backgroundImage: "url('/JohnBackground.jpg')" }}
      />
      {/*TopShadow*/}
      <div className="absolute top-0 left-0 w-full h-200
      bg-linear-to-b from-black/80 to-transparent z-10"/>
    </div>
  );
}
