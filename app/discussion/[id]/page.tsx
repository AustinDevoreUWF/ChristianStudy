import DiscussionPostPage from "@/components/ui/discussion/PostPage"
import { getDiscussionById } from "@/services/posts"
  // Must add an await to params from URL, and you must have a PROMISE
export default async function DiscussionPage({params}:{params: Promise<{id:string}>}) {
    const { id } = await params;
    const discussion = await getDiscussionById(Number(id));
      if (!discussion) return null;
    return <DiscussionPostPage discussion={discussion} />
}