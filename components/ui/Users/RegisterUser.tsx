"use client";
import {useRef} from "react";

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.10)",
  color: "#e8e8e8",
  fontFamily: "var(--font-garamond)",
  fontSize: "1.05rem",
  letterSpacing: "0.04em",
  padding: "0.7rem 0",
  marginBottom: "1.4rem",
  outline: "none",
};

export default function RegisterUser(){
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const password = passwordRef.current?.value;

        if(!email||!name||!password){
            alert("Please fill out all fields");
            return;
        }
        try{
            //call the api with this info, waht returns gets set into const data
            const res = await fetch("/api/users",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({userEmail:email, userName:name, password}),
            });
            const data = await res.json();
            if(!res.ok) throw new Error(data.message || "Registration Failed")//message is success?
            alert(`Welcome ${data.user.userName}!`);

            localStorage.setItem("token",data.token)
            if(emailRef.current) emailRef.current.value = "";
            if(nameRef.current) nameRef.current.value = "";
            if(passwordRef.current) passwordRef.current.value = "";
        }catch(err){
            console.error(err);
            alert("Error creating the user");
        }
    }
      return (
        <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "280px" }}
        >
        {/* Heading */}
        <p style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "1.1rem",
            fontWeight: 400,
            letterSpacing: "0.14em",
            color: "#ffffff",
            marginBottom: "0.35rem",
        }}>
            Enter the Discussion
        </p>

        {/* Rule */}
        <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.20)", marginBottom: "2rem" }} />

        <input
            ref={emailRef}
            type="email"
            placeholder="Email address"
            required
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
        />
        <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
        />
        <input
            ref={nameRef}
            type="text"
            placeholder="Your name"
            required
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
        />

        <button
            type="submit"
            style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.20)",
            color: "rgba(255,255,255,0.60)",
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            padding: "0.75rem",
            cursor: "pointer",
            marginTop: "0.4rem",
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ffffff";
            e.currentTarget.style.color = "#080808";
            e.currentTarget.style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255,255,255,0.60)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
            }}
        >
            Begin
        </button>
        </form>
  );
}