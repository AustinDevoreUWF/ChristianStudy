"use client"
//component version of AuthProvider
import { Children } from "react"
import { useAuth } from "./AuthContext"
//if what is passed in here is 
export default function AdminOnly({children}:{children:React.ReactNode;}){
    const {user,loading} =useAuth();
    if(loading)return null;
    if(!user||!user.isAdmin)return null
    return<>{children}</>
}