import Image from "next/image";
//HomePage
export default function Home() {
  return (
    
    <main className="relative min-h-screen overflow-hidden">
      {/*BackGround*/}
      <div 
      className="bg-center bg-cover min-h-screen opacity-100"
      style={{backgroundImage: "url('/JohnBackground.jpg')" }}
      />
      {/*Dim the painting*/}
      <div style={{position: "absolute", inset:0, background:"rgba(0,0,0,0.45)"}}></div>
    </main>
    
  );
}
