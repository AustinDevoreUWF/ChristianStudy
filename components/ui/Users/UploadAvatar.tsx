"use client";
import { useRef, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function ProfilePage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [showSave, setShowSave] = useState(false);
  const [status, setStatus] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  interface TokenPayload {
  userName: string;
  userEmail: string;
}
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
        const decoded = jwtDecode<TokenPayload>(token);
        setUserName(decoded.userName);
        setUserEmail(decoded.userEmail);
    } catch (err) {
        console.error("Invalid token", err);
    }
    }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setShowSave(true);
    setStatus("");
  };

  const handleSave = async () => {
    if (!inputRef.current?.files?.[0]) return;
    setStatus("Uploading...");
    try {
      // 1. Upload to Cloudinary/S3 → get back a URL
      // 2. Call your API
      // const res = await fetch("/api/users/profile-pic", {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ userName, profilePic: uploadedUrl }),
      // });
        const file = inputRef.current.files[0];

    // 1. Convert file to base64
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    // 2. Upload to Cloudinary → get back a URL
    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64 }),
    });
    const uploadData = await uploadRes.json();
    if (!uploadRes.ok) throw new Error(uploadData.error);

    // 3. Save the URL to your database
    const saveRes = await fetch("/api/users/profile-pic", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, profilePic: uploadData.url }),
    });
    if (!saveRes.ok) throw new Error("Failed to save");

      setStatus("Photo updated.");
      setShowSave(false);
    } catch (err) {
      setStatus("Failed to update.");
    }
  };

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

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "320px", gap: "2rem" }}>

      {/* Avatar */}
      <div style={{ position: "relative", width: "96px", height: "96px" }}>
        <div style={{ width: "96px", height: "96px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          {preview ? (
            <img src={preview} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.4rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
              {userName.split(" ").map(n => n[0]).join("")}
            </span>
          )}
        </div>

        {/* Camera button */}
        <label htmlFor="pfp-input" style={{ position: "absolute", bottom: 0, right: 0, width: "26px", height: "26px", borderRadius: "50%", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.20)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          📷
        </label>
        <input ref={inputRef} id="pfp-input" type="file" accept="image/*" style={{ display: "none" }} onChange={handleFileChange} />
      </div>

      {/* Name & Email */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.1rem", color: "#e8e8e8", margin: "0 0 0.2rem", letterSpacing: "0.12em" }}>{userName}</p>
        <p style={{ fontFamily: "var(--font-garamond)", fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", margin: 0, letterSpacing: "0.08em" }}>{userEmail}</p>
      </div>

      <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.10)" }} />

      {/* Details */}
      {[{ label: "Name", value: userName }, { label: "Email", value: userEmail }].map(({ label, value }) => (
        <div key={label} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-cinzel)" }}>{label}</span>
          <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.70)", fontFamily: "var(--font-garamond)", letterSpacing: "0.04em" }}>{value}</span>
        </div>
      ))}

      {/* Save button */}
      {showSave && (
        <button onClick={handleSave} style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.20)", color: "rgba(255,255,255,0.60)", fontFamily: "var(--font-cinzel)", fontSize: "0.75rem", letterSpacing: "0.22em", textTransform: "uppercase", padding: "0.75rem", cursor: "pointer" }}>
          Save Photo
        </button>
      )}

      {status && (
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.30)", fontFamily: "var(--font-garamond)", letterSpacing: "0.1em", margin: 0 }}>{status}</p>
      )}

    </div>
  );
}