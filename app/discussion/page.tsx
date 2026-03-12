import CreateDiscussion from "@/components/ui/CreateDiscussion";

export default function discussionPage(){
    return(
        <div className="flex justify-center items-center min-h-screen">
                <CreateDiscussion user={{id: 1,isAdmin: true}}/>
        </div>
)
}