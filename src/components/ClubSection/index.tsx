import { useState } from 'react'
import styles from './styles.module.scss'
import ClubHowWorks from '../ui/ClubHowWorks'
import ClubPlansContainer from '../ui/ClubPlansContainer'

interface Props {
    openModal: () => void
}

export default function ClubSection({ openModal }: Props) {


    const [active, setActive] = useState<number>(0)
    return (
        <section className={styles.container}>
            <div className={styles.optionsContainer}>
                <button
                    type='button'
                    onClick={() => setActive(0)}
                    className={`${styles.option} ${active === 0 ? styles.active : ""}`}
                >
                    Planos Clube Bancorbrás
                </button>
                <button
                    type='button'
                    onClick={() => setActive(1)}
                    className={`${styles.option} ${active === 1 ? styles.active : ""}`}
                >
                    Como funciona
                </button>
            </div>
            <div className={styles.contentContainer}>
                {active === 0 && <ClubPlansContainer openModal={openModal} />}
                {active === 1 && <ClubHowWorks openModal={openModal} />}
            </div>

        </section>
    )
}