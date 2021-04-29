import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { ChangeEvent } from 'react'
import { LoginContext } from '../contexts/LoginContext'
import styles from './login.module.scss'



export default function Login() {
    
    const { email, password, doLogin} = useContext(LoginContext)
    
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    
    function validateLogin() {
        if (emailInput === email && passwordInput === password){
            doLogin()
        }
    }


    function changeEmailInput(e: ChangeEvent<HTMLInputElement>){
        setEmailInput(e.target.value)
    }

    function changePasswordInput(e: ChangeEvent<HTMLInputElement>){
        setPasswordInput(e.target.value)
    }

  
    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h3>Acesse sua conta para concluir seu pedido</h3>
                <label>Email:</label>
                <input
                  type='text'
                  required
                  placeholder='Digite seu e-mail'
                  onChange={changeEmailInput} />
                <label>Senha:</label>
                <input
                  type='password'
                  placeholder='Digite sua senha'
                  onChange={changePasswordInput}
                  required />
                <Link href='/finish'>
                    <button onClick={validateLogin}>Fazer login</button>
                </Link>
            </div>
        </div>
    )
}

