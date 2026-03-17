import CreateDiscussion from "@/components/ui/discussion/CreateDiscussion";

export default function discussionPage(){
    return(
        <div className="flex min-h-screen bg-[#a09080]">
                <CreateDiscussion user={{id: 1,isAdmin: true}}/>
        </div>
)
}