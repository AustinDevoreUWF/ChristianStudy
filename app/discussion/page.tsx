import CreateDiscussion from "@/components/ui/discussion/CreateDiscussion";
import DiscussionBoard from "@/components/ui/discussion/DiscussionBoard";

export default async function DiscussionPage() {
  return (
    <main className="flex h-screen overflow-y-auto bg-[#080808]" style={{ background: "#080808" }}>
      <DiscussionBoard />
      <CreateDiscussion user={{ id: 1, isAdmin: true }} />
    </main>
  )
}