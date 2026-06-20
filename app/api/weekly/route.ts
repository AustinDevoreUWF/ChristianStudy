import {updateFeaturedDiscussion, updateSaint, updateScripture, updateFeaturedScripture} from "@/services/weekly";

export async function POST(req:Request, section:string){
    
    try{
        const body = await req.json()
        const {section, ...data} = body
        
    }
}
