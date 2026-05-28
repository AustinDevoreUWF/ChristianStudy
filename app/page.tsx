import Image from "next/image";
//HomePage
export default function Home() {
  return (
    
    <main className="relative min-h-screen fixed bg-black">
      {/*BackGround*/}
      <div className="flex items-center justify-end py-20 ">
        <Image 
          src="/angelTransparent.png"
          width={400}
          height={400}
          alt="angel"
          className="angel"
        />
      </div>
      {/*Dim the painting*/}
    </main>
    
  );
}
