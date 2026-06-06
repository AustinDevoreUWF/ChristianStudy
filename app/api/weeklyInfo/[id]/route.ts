import { getWeeklyValues } from "@/services/weekly"


export async function GET(req:Request){
    try{
        const data = await getWeeklyValues()
        return Response.json({data},{status:200})
    }catch(err:any){
        return Response.json({error: err.message||"There was an error retrieving the data"},{status:500})
    }
}

