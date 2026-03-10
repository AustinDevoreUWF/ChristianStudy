import { url } from "inspector"

export default function about(){
    return(
    <div className="flex min-h-screen">
        {/*Left side */}
        <div
        className="hidden md:block md:w-1/2 bg-cover bg-center opacity-100"
        style={{
            backgroundImage: "url('/pius.jpg')",
            position: "sticky",
            top:0,
            height: "100vh",
        }}
        />
        {/**Right side scrolling*/}
        <div className="w-full md:w-1/2 p-8 overflow-auto bg-black">
        <p className="text-white py-8 text-center">Heres my Text hello!</p>
        </div>
    </div>
    )
}