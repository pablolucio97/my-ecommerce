import React from 'react'
import { createContext, useState } from 'react'

type LoginProps = {
    password: string;
    email: string;
    isLogged: boolean;
    doLogin: () => void;
}

type LoginPropsProvider = {
    children: React.ReactNode
}


export const LoginContext = createContext({} as LoginProps)

export default function LoginContextProvider({ children }: LoginPropsProvider) {
    
    const [isLogged, setIsLogged] = useState(false)
    
    const email = 'admin@test.com'
    const password = '123'

    function doLogin(){
        setIsLogged(true)
    }

    return (
        <LoginContext.Provider value={{email, password, isLogged, doLogin}}>
            {children}
        </LoginContext.Provider>
    )

}