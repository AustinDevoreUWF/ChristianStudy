import CreateDiscussion from "@/components/ui/discussion/CreateDiscussion";
import DiscussionBoard from "@/components/ui/discussion/DiscussionBoard";

export default async function DiscussionPage() {
  return (
    <main className="flex min-h-screen bg-[#a09080]">
      <DiscussionBoard />
      <CreateDiscussion user={{ id: 1, isAdmin: true }} />
    </main>
  )
}