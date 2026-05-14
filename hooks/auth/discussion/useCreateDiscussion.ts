import { useState } from "react";

export default function useCreateDiscussion() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createDiscussion = async (title: string, text: string, authorId: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/discussion/createDiscussion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, text, authorId }),
      });
      if (!res.ok) throw new Error("Failed to create discussion");
      return await res.json();
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { createDiscussion, isLoading, error };
}