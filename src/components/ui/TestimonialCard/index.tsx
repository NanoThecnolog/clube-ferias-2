import { Testimonials } from '@/common/variables/testimonials'
import styles from './styles.module.scss'
import { FaQuoteRight } from 'react-icons/fa6'

interface Props {
    card: Testimonials
}

export default function TestimonialCard({ card }: Props) {
    if (!card) return null
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <img src={card.img} alt={card.name} />
                </div>
                <div className={styles.nameContainer}>
                    <p className={styles.name}>{card.name}</p>
                    <p className={styles.location}>{card.location}</p>
                </div>
            </div>
            <div className={styles.textContainer}>
                <p>{card.text}</p>
            </div>
            <div className={styles.quoteContainer}>
                <FaQuoteRight />
            </div>
        </div>
    )
}