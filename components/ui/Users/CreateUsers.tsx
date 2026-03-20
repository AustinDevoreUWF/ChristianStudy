'use client'
import { useRef } from "react";

export default function CreateUser(){
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    
    const handleSubmit = async(e:React.SubmitEvent)=>{
        e.preventDefault()

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const name =nameRef.current?.value;

        if(!email||!password||!name){alert("Please enter all the required fields")
            return;
        };

        try {
            const res = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name }),
            });
            if(res.status === 400){
                alert("That email is already in use!")
                return;
            }
            if (!res.ok) throw new Error("Failed to create user");

            alert("User created!");
            if (emailRef.current) emailRef.current.value = "";
            if (passwordRef.current) passwordRef.current.value = "";
            if (nameRef.current) nameRef.current.value = "";
        } catch (err) {
            console.error(err);
            alert("Error creating user");
        }
    };
return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md p-4 bg-[#0A0806EB]">
        <input ref={emailRef} type="email" placeholder="Email Address" required className="text-white" />
        <input ref={passwordRef} type="password" placeholder="Password" required className="text-white" />
        <input ref={nameRef}type="text" placeholder="Name" required className="text-white" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
)
}