import { miniCardsContent } from '@/common/variables/MiniCardsContent'
import MiniCard from '../ui/MiniCard'
import styles from './styles.module.scss'

interface Props {
    openModal: () => void
}

export default function CallToActionOne({ openModal }: Props) {
    return (
        <section className={styles.container}>
            <svg className={styles.shapes} viewBox="0 0 1440 220" preserveAspectRatio="none">
                <path className={styles.yellowShape} d="M0 132 C260 145 430 175 610 220 L0 220 Z" />
                <path className={styles.purpleShape} d="M750 205 C970 180 1180 95 1440 58 L1440 220 L750 220 Z" />
                <path className={styles.orangeShape} d="M760 220 C970 190 1200 160 1440 150 L1440 220 Z" />
            </svg>
            <div className={styles.contentContainer}>
                <h1>São milhares de hotéis para desfrutar</h1>
                <p>Muitas opções de hospedagem em destinos nacionais e internacionais: pousadas, hotéis completos e resorts para diferentes estilos de viagem, do litoral ao interior.</p>
                <div className={styles.buttonContainer}>
                    <button onClick={openModal}>Quero conhecer todas as vantagens do Clube</button>
                </div>
            </div>
            <div className={styles.miniCardsContainer}>
                {miniCardsContent.map((item, index) =>
                    <div key={index}>
                        <MiniCard card={item} />
                    </div>
                )}
            </div>
        </section>
    )
}