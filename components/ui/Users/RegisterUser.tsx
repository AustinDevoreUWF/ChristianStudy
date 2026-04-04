`user client`
import {useRef} from "react";

export default function RegisterUser(){
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const password = passwordRef.current?.value;

        if(!email||!name||!password){
            alert("Please fill out all fields");
            return;
        }
        try{
            //call the api with this info, waht returns gets set into const data
            const res = await fetch("/api/users",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({userEmail:email, userName:name, password}),
            });
            const data = await res.json();
            if(!res.ok) throw new Error(data.message || "Registration Failed")//message is success?
            alert(`Welcome ${data.user.userName}!`);

            localStorage.setItem("token",data.token)
            if(emailRef.current) emailRef.current.value = "";
            if(nameRef.current) nameRef.current.value = "";
            if(passwordRef.current) passwordRef.current.value = "";
        }catch(err){
            console.error(err);
            alert("Error creating the user");
        }
    }
}