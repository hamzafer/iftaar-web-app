import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.devclubm.me/"
                target="_blank"
                rel="noopener noreferrer"
            >
        <span className={styles.logo}>
          <Image src="/devclublogo.svg" alt="DevClub Logo" width={40} height={20}/>
        </span>
                Powered by DevClub
            </a>
        </footer>
    );
}
