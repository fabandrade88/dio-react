import {IAuthContext, IAuthContextProviderProps, ILoginData} from './types';
import { createContext, useState } from "react";
import { api } from '../services/api';
import { IUser } from '../Types/user';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);
            if(data.length === 1){
                setUser(data[0]);
                navigate('/feed')
            } else {
                alert('Email ou senha invalido')
            }
        } catch {
            alert('Houver um erro, tente novamente')
            
        }
    }

    return(<AuthContext.Provider value={{user, handleLogin}}>
        {children}
    </AuthContext.Provider>)
}