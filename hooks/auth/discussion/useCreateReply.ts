import { useState } from "react";
    
//what do i want to do:Create a Reply, if the user types in either field, track it, if the user submits it
//push it to the api route with the data, close the form
//hook for creating a Reply
export default function useCreateReply(){
//call create Reply from service
const [userText, setUserText] = useState<string|null>(null)
}
