import styles from '../styles/login.module.css';
import { useAppContext } from '../context/state.js';
import { useState } from 'react';
import { login, register } from '@/data/auth.js';
import Link from 'next/link.js';

export default function Login() {

    const { setToken } = useAppContext()

    const [loginData, setLoginData] = useState({ username: '', password: '' })
    const [registerData, setRegisterData] = useState(
        {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
            nickname: '',
        })
    const [showRegister, setShowRegister] = useState(false)


    const submitLogin = (e) => {
        e.preventDefault()

        login(loginData).then((res) => {
            if (res.token) {
                localStorage.setItem('token', res.token)
                setToken(res.token)
            }
        })
    }

    const submitRegister = (e) => {
        e.preventDefault()

        register(registerData).then((res) => {
            if (res.token) {
                localStorage.setItem('token', res.token)
                setToken(res.token)
            }
        })
    }

    const toggleRegister = () => {
        setShowRegister(!showRegister)
    }

    return (
        <div className={styles.loginContainer}>
            {showRegister ?

                <form className={styles.loginForm}>
                    <fieldset className={styles.fieldset}>
                        <h3>Username:</h3>
                        <input
                            required
                            type='text'
                            value={registerData.username}
                            onChange={(e) => {
                                setRegisterData({ ...registerData, username: e.target.value })
                            }}
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >Password:</h3>
                        <input
                            required
                            type='text'
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >Email:</h3>
                        <input
                            required
                            type='text'
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >First Name:</h3>
                        <input
                            required
                            type='text'
                            value={registerData.first_name}
                            onChange={(e) => setRegisterData({ ...registerData, first_name: e.target.value })}
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >Last Name:</h3>
                        <input
                            required
                            type='text'
                            value={registerData.last_name}
                            onChange={(e) => setRegisterData({ ...registerData, last_name: e.target.value })}
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >Nickname:</h3>
                        <input
                            required
                            type='text'
                            value={registerData.nickname}
                            onChange={(e) => setRegisterData({ ...registerData, nickname: e.target.value })}
                        />
                    </fieldset>
                    <button className={styles.button} onClick={submitRegister}>Register</button>
                    <div className={styles.buttonRegister} onClick={toggleRegister}>Back to Login</div>
                </form> :

                <form className={styles.loginForm}>
                    <fieldset className={styles.fieldset}>
                        <h3>Username:</h3>
                        <input
                            required
                            type='text'
                            value={loginData.username}
                            onChange={(e) => {
                                setLoginData({ ...loginData, username: e.target.value })
                            }}
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >Password:</h3>
                        <input
                            required
                            type='password'
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />
                    </fieldset>
                    <button className={styles.button} onClick={submitLogin}>Log In</button>
                    <div className={styles.buttonRegister} onClick={toggleRegister}>Register</div>
                </form>
            }
        </div>
    )
}