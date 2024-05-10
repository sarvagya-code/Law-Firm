import NavBar from './NavBar/NavBar';
import HeroSection from './HeroSection/HeroSection';
import styles from './Home.module.css';

export default function Home () {
    return (
        <div className={styles.wrapper}>
            <NavBar/>
            <HeroSection/>
        </div>
    );
}