"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import { useAuth } from "@/components/ui/context/AuthContext";

export default function LinkBar(){
  const {user} = useAuth()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[])
  return(
      <div className="mb-6 sm:mb-10 m-0 px-4 sm:px-10">
        <ul className="flex justify-center items-center list-none cursor-pointer flex-wrap gap-1 sm:gap-">
          {["essay","discussion","users","references","profile"].map((item) => (
            <li key={item} className="last:border-r-0 border-r border-white/[.08]">
              <Link href={item} className="flex px-2 sm:px-6 items-center justify-center py-1 sm:py-[.45rem] font-cinzel text-xs text-white1 hover:text-white/60 transition-colors no-underline">
                {item === "profile" ? (
                  mounted && user?.profilePic ? (<img src={user.profilePic} alt="Profile" className="w-8 h-8  sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover shadow-white shadow-sm rounded-full"/>)
                  :( <div className="w-4 h-4 rounded-full"/>)
                ) : (item)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-px bg-white/[.08]"/>
      </div>
      )
}