import prisma from "@/src/lib/prisma"
import { getDiscussionById } from "@/services/posts"
/*
Pre - Create a component for collecting replies
1. Based on the disscussion_id grab the Title and the content into variables
2. Display replies loop over replies and replies to replies
3. Create a Form that says what is required to reply to a post
 - Something like, Title of response or Thesis of response
 - Then a content response ->
    (take *text* as a bolding effect)
    (allow for links)
    (allow for scripture citations from the reply page)
    (Create something to cite Fathers or Saints or extrabiblical sources?)
    (Length Requirment)
 - 
*/
//params is passed from the browser and accessed through params in the component
export async function DiscussionPostPage({params}:{params:{id:string}}){
 const discussion = await getDiscussionById(Number(params.id))
 return (
        <main style={{ background: "#080808", minHeight: "100vh", padding: "2rem" }}>
            <h1 style={{ fontFamily: "var(--font-cinzel)", color: "#ffffff" }}>
                {discussion.title}
            </h1>
            <p style={{ fontFamily: "var(--font-garamond)", color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>
                By {discussion.userName} &bull; {new Date(discussion.createdAt!).toLocaleDateString()}
            </p>
            <p style={{ fontFamily: "var(--font-garamond)", color: "#e8e8e8", marginTop: "2rem" }}>
                {discussion.text}
            </p>
        </main>
 )

}
