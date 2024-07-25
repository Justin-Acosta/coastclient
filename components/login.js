import styles from '../styles/login.module.css'
import { useAppContext } from '../context/state.js';

export default function Login () {

    const { setToken } = useAppContext()


    // useEffect(() => {
    //     if (!token) {
    //         router.push('/login')
    //     }
    // },[])

    return (
            <div className={styles.loginContainer}>
                <form className={styles.loginForm}>
                    <fieldset className={styles.fieldset}>
                        <h3>Username:</h3>
                        <input/>
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <h3 >Password:</h3>
                        <input/>
                    </fieldset>
                    <button className={styles.button}>Log In</button>
                </form>
            </div>
    )
}