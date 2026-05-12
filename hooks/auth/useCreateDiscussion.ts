import { useState } from "react";

export default function useCreateDiscussion() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createDiscussion = async (topic: string, content: string, authorId: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/discussion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, content, authorId }),
      });
      if (!res.ok) throw new Error("Failed to create discussion");
      return await res.json();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createDiscussion, isLoading, error };
}