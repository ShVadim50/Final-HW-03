import styles from './header.module.css';
import Logo from '../../assets/Logo.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <img 
                    className={styles.imgPlane} 
                    src={Logo} 
                    alt='Логотип авиакомпании'
                    loading="lazy"
                />
                <h1 className={styles.title}>
                    Поиск авиабилетов
                </h1>
            </div>
        </header>
    );
}
