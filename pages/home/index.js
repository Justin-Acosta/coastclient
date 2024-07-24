import styles from '../../styles/home.module.css';
import {Title} from '../../components/title.js'

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Title/>
        </div>
    )
}