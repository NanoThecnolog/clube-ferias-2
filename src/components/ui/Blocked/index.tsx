import Head from 'next/head'
import Link from 'next/link'
import { FiAlertTriangle, FiCreditCard, FiLogOut } from 'react-icons/fi'

import styles from './styles.module.scss'

const BlockedPage = () => {
    /*const handleLogout = () => {
        document.cookie = 'flix-token=; Max-Age=0; path=/'
        window.location.href = '/login'
    }*/

    return (
        <>
            <Head>
                <title>Site suspenso</title>

                <meta
                    name="description"
                    content="Site temporariamente suspenso."
                />

                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <main className={styles.page}>
                <div className={styles.backgroundGlow} />

                <section className={styles.card}>
                    <div className={styles.iconContainer}>
                        <FiAlertTriangle />
                    </div>

                    <span className={styles.status}>
                        Site temporariamente suspenso
                    </span>
                </section>
            </main>
        </>
    )
}

export default BlockedPage