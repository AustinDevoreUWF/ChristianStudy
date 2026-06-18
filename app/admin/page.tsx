import {updateFeaturedDiscussion, updateSaint, updateFeaturedScripture, updateScripture} from "@/services/weekly";
import { featuredDiscussionDTO } from "@/src/dto/weeklyDTO";

export default function adminPage(){
 async function save(inputType: string, input: object){
    const res = await fetch(`/api/weekly`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({section:inputType,...input}),
    });
    return res.json()
}
    const handleUpdateFeatureDiscussion(){
        const dto:featuredDiscussionDTO = {
            discussionTitle: form.discussionTitle,
        }
    }

    return(
        <div className="flex flex-col">
            <div></div>

        </div>
    )
}