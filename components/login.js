import styles from '../styles/login.module.css';
import { useAppContext } from '../context/state.js';
import {useState} from 'react';
import { login } from '@/data/auth.js';

export default function Login () {

    const { setToken } = useAppContext()

    const [loginData, setLoginData] = useState ({username: '', password: ''})


    const submit =(e) => {
        e.preventDefault()

        login(loginData).then((res) => {
            if(res.token) {
                localStorage.setItem('token', res.token)
                setToken(res.token)
            }
        })
    }

    return (
            <div className={styles.loginContainer}>
                <form className={styles.loginForm}>
                    <fieldset className={styles.fieldset}>
                        <h3>Username:</h3>
                        <input
                            required
                            type='text'
                            value={loginData.username}
                            onChange={(e) => {
                                setLoginData({...loginData, username:e.target.value})
                            }}
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >Password:</h3>
                        <input
                            required
                            type='text'
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password:e.target.value})}
                        />
                    </fieldset>
                    <button className={styles.button} onClick={submit}>Log In</button>
                </form>
            </div>
    )
}