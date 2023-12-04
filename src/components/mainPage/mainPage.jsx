import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import styles from './mainPage.module.scss';
import { Outlet } from 'react-router-dom';


export function MainPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}