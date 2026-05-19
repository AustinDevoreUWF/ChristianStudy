'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useCreateDiscussion from "@/hooks/auth/discussion/useCreateDiscussion";
import { useAuth } from "../context/AuthContext";

const inputClassName =
  "block w-full bg-transparent border-none border-b border-b-[rgba(255,255,255,0.10)] text-[#e8e8e8] font-[var(--font-garamond)] text-[1.05rem] tracking-[0.04em] py-[0.7rem] outline-none transition-colors duration-200 focus:border-b-[rgba(255,255,255,0.60)] resize-none";

export default function CreateDiscussion() {
  const [open, setOpen] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { createDiscussion } = useCreateDiscussion();
  const { user, loading, refreshUser } = useAuth();
  const router = useRouter();

  if (loading) return null;

  if (!user?.isAdmin) {
    return (
      <p className="font-[var(--font-garamond)] italic text-[1rem] text-[rgba(255,255,255,0.30)]">
        You are not permitted to create a discussion.
      </p>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const text = textRef.current?.value;
    if (!title || !text) return alert("Please fill in all fields");

    try {
      await createDiscussion(title, text, user.userId);
      alert("Discussion created");
      if (titleRef.current) titleRef.current.value = "";
      if (textRef.current) textRef.current.value = "";
      router.refresh();
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("There was an error creating the discussion");
    }
  };

  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-[7.5rem] right-[1.5rem] rounded-none border border-[rgba(255,255,255,0.20)] bg-transparent px-[1.25rem] py-[0.65rem] text-[0.75rem] uppercase tracking-[0.22em] font-[var(--font-cinzel)] text-[rgba(255,255,255,0.60)] transition duration-200 ease-in-out hover:bg-white hover:text-[#080808] hover:border-white"
        >
          New Discussion
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.75)]">
          <form className="flex w-full max-w-[520px] flex-col rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[#080808] p-8" onSubmit={handleSubmit}>
            <p className="font-[var(--font-cinzel)] text-[1.1rem] font-[400] tracking-[0.14em] text-white mb-[0.35rem]">New Discussion</p>
            <div className="mb-8 h-[1px] w-[32px] bg-[rgba(255,255,255,0.20)]" />

            <input ref={titleRef} placeholder="Title" required className={inputClassName} />

            <textarea
              ref={textRef}
              placeholder="What do you want to discuss?"
              required
              rows={5}
              className={`${inputClassName} mt-[1.4rem]`}
            />

            <div className="mt-[2rem] flex justify-end gap-[0.75rem]">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-none border border-[rgba(255,255,255,0.12)] bg-transparent px-[1.2rem] py-[0.6rem] text-[0.72rem] uppercase tracking-[0.20em] font-[var(--font-cinzel)] text-[rgba(255,255,255,0.35)] transition duration-200 ease-in-out hover:text-white hover:border-[rgba(255,255,255,0.30)]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-none border border-[rgba(255,255,255,0.20)] bg-transparent px-[1.2rem] py-[0.6rem] text-[0.72rem] uppercase tracking-[0.20em] font-[var(--font-cinzel)] text-[rgba(255,255,255,0.60)] transition duration-200 ease-in-out hover:bg-white hover:text-[#080808] hover:border-white"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
