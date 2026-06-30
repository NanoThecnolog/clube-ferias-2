import { faq } from '@/common/variables/FAQ'
import styles from './styles.module.scss'
import FAQLine from '../ui/FaqLines'

export default function FAQ() {
    return (
        <section className={styles.container}>
            <div className={styles.topContainer}>
                <p>Dúvidas sobre o clube Bancorbrás?</p>
                <h1>A gente te explica!</h1>
            </div>
            <div className={styles.faqContainer}>
                {faq.map((item, index) =>
                    <div key={index} className={styles.line}>
                        <FAQLine line={item} />
                    </div>
                )}
            </div>
        </section>
    )
}