"use client";
import { useRef, useState } from "react";
import FormInput from "../ui/FormInput";
import useLogin from "@/hooks/auth/useLogin";
import useRegister from "@/hooks/auth/useRegister";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const { login, isLoading, error } = useLogin();
  const { register, isRegisterLoading, errorRegister } = useRegister();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    if (isLogin && nameRef.current) nameRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;

    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill out all fields");
      return;
    }

    try {
      if (isLogin) {
        const data = await login(email, password);
        alert(`Logged in as ${data.user.userName}`);
      } else {
        const res = await register(email, password, name!);
        alert(`Account created for${res.user.name}`);
      }

      if (emailRef.current) emailRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
      if (nameRef.current) nameRef.current.value = "";
    } catch (err) {
      console.error(err);
      alert(isLogin ? "Error logging in" : "Error creating account");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[280px]">
      <p className="font-[var(--font-cinzel)] text-[1.1rem] font-[400] tracking-[0.14em] text-white mb-[0.35rem] transition-opacity duration-300 ease-in-out">
        {isLogin ? "Welcome Back" : "Welcome In"}
      </p>

      <div className="w-[32px] h-[1px] bg-[rgba(255,255,255,0.20)] mb-8" />

      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <FormInput type="email" placeholder="Email address" inputRef={emailRef} required />

        <FormInput type="password" placeholder="Password" inputRef={passwordRef} required />

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isLogin ? "max-h-0 opacity-0 pointer-events-none" : "max-h-[80px] opacity-100 pointer-events-auto"
          }`}
        >
          <FormInput type="text" placeholder="Your name" inputRef={nameRef} tabIndex={isLogin ? -1 : 0} />
        </div>

        {error && <p className="text-red-500 text-[0.8rem]">{error}</p>}
        {errorRegister && <p className="text-red-500 text-[0.8rem]">{errorRegister}</p>}

        <button
          type="submit"
          disabled={isLoading || isRegisterLoading}
          className="mt-1 inline-flex w-full justify-center border border-[rgba(255,255,255,0.20)] bg-transparent px-[0.75rem] py-[0.75rem] text-[0.75rem] uppercase tracking-[0.22em] font-[var(--font-cinzel)] text-[rgba(255,255,255,0.60)] transition duration-200 ease-in-out hover:bg-white hover:text-[#080808] hover:border-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading || isRegisterLoading ? "..." : isLogin ? "Enter" : "Begin"}
        </button>

        <div className="mt-[1.8rem] flex items-center gap-[0.75rem]">
          <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.08)]" />
          <button
            type="button"
            onClick={handleToggle}
            className="bg-none border-none p-0 text-[0.62rem] uppercase tracking-[0.18em] font-[var(--font-cinzel)] text-[rgba(255,255,255,0.30)] transition duration-200 ease-in-out whitespace-nowrap hover:text-[rgba(255,255,255,0.70)]"
          >
            {isLogin ? "New member?" : "Have an account?"}
          </button>
          <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.08)]" />
        </div>
      </form>
    </div>
  );
}
