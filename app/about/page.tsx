export default function about() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-1/2 h-screen sticky top-0 bg-[url('/pius.jpg')] bg-cover bg-center opacity-100" />
      <div className="w-full md:w-1/2 overflow-auto bg-black p-8">
        <p className="text-white py-8 text-center">Heres my Text hello!</p>
      </div>
    </div>
  );
}