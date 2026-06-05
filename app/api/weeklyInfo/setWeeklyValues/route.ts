import { setWeeklyValues } from "@/services/weekly";
import { WeeklyDTO } from "@/src/dto/discussionDTO";

export async function POST(req: Request){
    //get body from the component
    const body = await req.json();
    
    const input: WeeklyDTO = {
        scriptureChapter: body.scriptureChapter,
        scriptureVerse: body.scriptureVerse,
        scriptureBook: body.scriptureBook,
        saintName: body.saintName,
        saintDescription: body.saintDescription,
        saintFeastDay: body.saintFeastDay,
    }
    if(!input) return Response.json({error:"Missing Fields"},{status:400});
    try{
        const weeklyValues = await setWeeklyValues(input)
        return Response.json({message:"Weekly Values Updated", data:weeklyValues},{status:200})
    }catch(err:any){
        return Response.json({error:err.message||"Failed To update Weekly Values"},{status:500});
    }

    }
