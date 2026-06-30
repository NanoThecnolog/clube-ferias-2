import { MiniCardProps } from '@/common/variables/MiniCardsContent'
import styles from './styles.module.scss'

interface Props {
    card: MiniCardProps
}
export default function MiniCard({ card }: Props) {
    return (
        <div className={styles.container}>
            <h3>{card.value}</h3>
            <h4>{card.text}</h4>
        </div>
    )
}