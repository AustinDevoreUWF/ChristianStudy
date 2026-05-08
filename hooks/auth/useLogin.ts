import { useState } from "react";

export default function useLogin(){
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState<string|null>(null);
}