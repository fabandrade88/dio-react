import React from "react";
import { IUser } from "../Types/user";

export interface IAuthContext {
    user: IUser
    handleLogin: (LoginData: ILoginData) => Promise<void>
}

export interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}