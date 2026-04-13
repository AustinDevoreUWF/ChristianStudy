"use client";
import { useRef, useState } from "react";
 
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

export default function AuthForm(){
    const [isAnimated, setIsAnimated] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const handleToggle = () =>{
        setIsAnimated(true);
        setTimeout(()=>setIsAnimated(false),400);
        setIsLogin((prev)=>!prev)
        if(!isLogin && nameRef.current) nameRef.current.value="";
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const email    = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const name     = nameRef.current?.value;
    
        if (!email || !password || (!isLogin && !name)) {
        alert("Please fill out all fields");
        return;
        }
    
        try{
            if(isLogin){
                const res = await fetch("/api/users/login",{
                    method:"POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({userEmail:email, password})
                });
                const data = await res.json();
                if(!res.ok) throw new Error(data.message||"Login Failed");
                alert(`Welcome ${data.user.userName}`);
                localStorage.setItem("token", data.token);
            }else{
                const res = await fetch("/api/users/register",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({userEmail:email, userName:name, password}),
                });
                
                const data = await res.json();
                if(!res.ok) throw new Error(data.message||"Registration Failed");
                alert(`Welcome ${data.user.userName}!`);
                localStorage.setItem("token",data.token);

            }

      if (emailRef.current)    emailRef.current.value    = "";
      if (passwordRef.current) passwordRef.current.value = "";
      if (nameRef.current)     nameRef.current.value     = "";
    } catch (err) {
      console.error(err);
      alert(isLogin ? "Error logging in" : "Error creating account");
    }
  };
return(
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "280px",
      }}
    >
      {/* Heading */}
      <p
        style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "1.1rem",
          fontWeight: 400,
          letterSpacing: "0.14em",
          color: "#ffffff",
          marginBottom: "0.35rem",
          transition: "opacity 0.3s ease",
        }}
      >
        {isLogin ? "Welcome Back" : "Welcome In"}
      </p>
 
      {/* Rule */}
      <div
        style={{
          width: "32px",
          height: "1px",
          background: "rgba(255,255,255,0.20)",
          marginBottom: "2rem",
        }}
      />
 
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "100%" }}>
 
        <input
          ref={emailRef}
          type="email"
          placeholder="Email address"
          required
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
          onBlur={(e)  => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
        />
 
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
          onBlur={(e)  => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
        />
 
        {/*
          Name field: animates in/out via max-height + opacity.
          overflow:hidden is the key — combined with max-height transition
          it creates the smooth expand/collapse effect.
        */}
        <div
          style={{
            maxHeight: isLogin ? "0px" : "80px",
            opacity: isLogin ? 0 : 1,
            overflow: "hidden",
            transition: "max-height 1.0s ease, opacity 0.35s ease",
            // Pointer-events off while hidden so tab order is clean
            pointerEvents: isLogin ? "none" : "auto",
          }}
        >
          <input
            ref={nameRef}
            type="text"
            placeholder="Your name"
            required={!isLogin}
            tabIndex={isLogin ? -1 : 0}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
            onBlur={(e)  => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
          />
        </div>
 
        {/* Submit */}
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
            e.currentTarget.style.background   = "#ffffff";
            e.currentTarget.style.color        = "#080808";
            e.currentTarget.style.borderColor  = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background   = "transparent";
            e.currentTarget.style.color        = "rgba(255,255,255,0.60)";
            e.currentTarget.style.borderColor  = "rgba(255,255,255,0.20)";
          }}
        >
          {isLogin ? "Enter" : "Begin"}
        </button>
 
        {/*
          Toggle — sits below the button, centered, subtle.
          A thin rule + small caps text feels intentional rather than afterthought.
        */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "1.8rem",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          <button
            type="button"
            onClick={handleToggle}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.30)",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.30)")}
          >
            {isLogin ? "New member?" : "Have an account?"}
          </button>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>
 
      </form>
    </div>
)
}