import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { createSession, Session } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const handleLogin = async ({ username, password }: Session) => {
        try{
            const response = await createSession({ username, password })
           
                    if(response){
                    localStorage.setItem('token', response.data.token)
                    navigate("/");
                    }
                } catch(error) {
            console.log(error);
        }
    }
    const tokenStorage = localStorage.getItem("token")

        
    return (
        <AuthContext.Provider value={{ handleLogin, signed: !!tokenStorage }}>
            {children}
        </AuthContext.Provider>
    );
}
