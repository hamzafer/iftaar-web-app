import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "./Components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Iftaar 23</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Iftaar 23!
                </h1>
                <br/>
                <div className={styles.grid}>
                    <a href="/timeline" className={styles.card}>
                        <h2>View Timeline &rarr;</h2>
                        <p>Checkout the whole Ramadan Iftaar timeline!</p>
                    </a>

                    <a href="/next-iftaar" className={styles.card}>
                        <h2>View Next Iftaar &rarr;</h2>
                        <p>See who is next in the list to host!</p>
                    </a>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
