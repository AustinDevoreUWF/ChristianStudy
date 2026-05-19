"use client"
import { useState } from "react";
import AuthForm from "@/components/auth/AuthForm";
/*
Create a page for non users to create a User Profile.
Needs to pass in a user Object for if the user is already registered
    -Grey out the background
    -Show empty profile image with clickable PFP changer
    -Tags to show affiliation, 
    -Popup, are you already a user? NO-Create account:YES-Sign-in
    -If YES Log in
    -If NO fade into create Account popup
*/
export default function usersPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex min-h-screen bg-[#080808]">
      <div className="w-full md:w-1/3 flex justify-center items-center bg-[#080808] px-[2.5rem] py-[3rem]">
        <AuthForm />
      </div>

      <div className="hidden lg:flex w-2/3 relative overflow-hidden bg-[url('/JesusWithRabbis.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#080808_0%,_transparent_28%)]" />
      </div>
    </main>
  );
}