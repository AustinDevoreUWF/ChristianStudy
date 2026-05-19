"use client";
import { useRef, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [showSave, setShowSave] = useState(false);
  const [status, setStatus] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { user, refreshUser, logout } = useAuth();
  const userName = user?.userName ?? "";
  const userPfp = user?.profilePic ?? null;
  const userEmail = user?.userEmail ?? "";
  const showLogout = Boolean(user);

  useEffect(() => {
    refreshUser();
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
      const file = inputRef.current.files[0];

      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const uploadRes = await fetch("/api/users/uploadImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64 }),
      });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error);

      const saveRes = await fetch("/api/users/pfpSave", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, profilePic: uploadData.url }),
      });
      if (!saveRes.ok) throw new Error("Failed to save");

      setStatus("Photo updated.");
      setShowSave(false);
      await refreshUser();
    } catch (err) {
      setStatus("Failed to update.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[320px] gap-[2rem]">
      <div className="relative w-[96px] h-[96px]">
        <div className="w-[96px] h-[96px] rounded-full border border-[rgba(255,255,255,0.15)] bg-[#111] flex items-center justify-center overflow-hidden">
          {preview ? (
            <img src={preview} alt="Profile" className="w-full h-full object-cover" />
          ) : userPfp ? (
            <img src={userPfp} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <span className="font-[var(--font-cinzel)] text-[1.4rem] text-[rgba(255,255,255,0.4)] tracking-[0.1em]">
              {userName.split(" ").map((n) => n[0]).join("")}
            </span>
          )}
        </div>

        <label htmlFor="pfp-input" className="absolute bottom-0 right-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.20)] cursor-pointer">
          📷
        </label>
        <input ref={inputRef} id="pfp-input" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </div>

      <div className="text-center">
        <p className="font-[var(--font-cinzel)] text-[1.1rem] text-[#e8e8e8] mb-[0.2rem] tracking-[0.12em]">{userName}</p>
        <p className="font-[var(--font-garamond)] text-[0.9rem] text-[rgba(255,255,255,0.6)] m-0 tracking-[0.04em]">{userEmail}</p>
      </div>

      <div className="w-[32px] h-[1px] bg-[rgba(255,255,255,0.10)]" />

      {[{ label: "Name", value: userName }, { label: "Email", value: userEmail }].map(({ label, value }) => (
        <div key={label} className="w-full flex justify-between items-center py-[0.6rem] border-b border-b-[rgba(255,255,255,0.06)]">
          <span className="text-[0.72rem] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.25)] font-[var(--font-cinzel)]">{label}</span>
          <span className="text-[0.88rem] text-[rgba(255,255,255,0.70)] font-[var(--font-garamond)] tracking-[0.04em]">{value}</span>
        </div>
      ))}

      {showSave && (
        <button
          onClick={handleSave}
          className="w-full border border-[rgba(255,255,255,0.20)] bg-transparent py-[0.75rem] text-[0.75rem] uppercase tracking-[0.22em] font-[var(--font-cinzel)] text-[rgba(255,255,255,0.60)] transition duration-200 ease-in-out hover:bg-white hover:text-[#080808] hover:border-white"
        >
          Save Photo
        </button>
      )}

      {showLogout && (
        <button
          onClick={logout}
          className="w-full border border-[rgba(255,255,255,0.20)] bg-transparent py-[0.75rem] text-[0.75rem] uppercase tracking-[0.22em] font-[var(--font-cinzel)] text-[rgba(255,255,255,0.60)] transition duration-200 ease-in-out hover:bg-white hover:text-[#080808] hover:border-white"
        >
          Logout
        </button>
      )}

      {status && <p className="text-[0.72rem] text-[rgba(255,255,255,0.30)] font-[var(--font-garamond)] tracking-[0.1em] m-0">{status}</p>}
    </div>
  );
}
