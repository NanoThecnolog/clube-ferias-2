import { FAQ } from '@/common/variables/FAQ'
import styles from './styles.module.scss'
import { useState } from 'react'
interface Props {
    line: FAQ
}
export default function FAQLine({ line }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
            <button
                type='button'
                className={styles.title}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4>{line.q}</h4>
            </button>
            <div className={styles.text}>
                <p>{line.a}</p>
            </div>
        </div>
    )
}