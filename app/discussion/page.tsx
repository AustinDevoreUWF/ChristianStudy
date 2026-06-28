export const dynamic = "force-dynamic";
import CreateDiscussion from "@/components/ui/discussion/CreateDiscussion";
import DiscussionBoard from "@/components/ui/discussion/DiscussionBoard";

export default async function DiscussionPage() {
  return (
    <main className="flex flex-col h-screen overflow-y-auto bg-[#080808]" style={{ background: "#080808" }}>
      
      <div className="flex justify-end mt-5 mr-5">
        <CreateDiscussion />
      </div>
      <DiscussionBoard />
    </main>
  )
}