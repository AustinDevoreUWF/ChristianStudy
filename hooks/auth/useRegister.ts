import {useState} from "react";
import { useAuth } from "@/components/ui/context/AuthContext";

export default function useRegister(){
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [errorRegister, setErrorRegister]  = useState<string|null>(null);
    const { refreshUser } = useAuth();

    const register = async (email:string, password:string, name:string)=>{
        setIsRegisterLoading(true);
        setErrorRegister(null);
        try{
            const res = await fetch("/api/users/register",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({userEmail:email, userName:name, password}),
            });
            const data = await res.json();
            if(!res.ok) throw new Error(data.message||"Registration Failed");
            localStorage.setItem("token", data.token);
            await refreshUser();
            return data;
        }catch(err:any){
            setErrorRegister(err.message);
        } finally {
            setIsRegisterLoading(false);
        }
    };
    return {register, isRegisterLoading, errorRegister};
}