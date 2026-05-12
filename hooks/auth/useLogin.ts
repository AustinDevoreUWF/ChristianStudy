import { use, useEffect, useState } from "react";
import {useAuth} from "@/components/ui/context/AuthContext";

export default function useLogin(){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);
    const { refreshUser } = useAuth();
    
    useEffect(() => {
        refreshUser();
    },[]);

    const login = async (email:string, password:string)=>{
        setIsLoading(true);
        setError(null);
        try{
            const res = await fetch("/api/users/login",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({userEmail: email, password})
            });
            const data = await res.json();
            if(!res.ok) throw new Error(data.message||"Login Failed");
            localStorage.setItem("token", data.token);
            await refreshUser();
            return data;
        }catch(err:any){
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    return {login,isLoading,error};
}