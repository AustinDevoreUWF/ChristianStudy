import prisma from "@prisma"

async function getDiscussions(){
  return await prisma.discussion.findMany({
    select: {id:true}
  })  
}
export default function discussionList(){
    const discussions = await getDiscussions();

}