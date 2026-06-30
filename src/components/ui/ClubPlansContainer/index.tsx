import { plansClub } from '@/common/variables/plans'
import styles from './styles.module.scss'
import ClubPlan from '../ClubPlan'

interface Props {
    openModal: () => void
}

export default function ClubPlansContainer({ openModal }: Props) {
    return (
        <div className={styles.content}>
            <div className={styles.textContainer}>
                <h2>Quer começar a planejar a sua viagem?</h2>
                <p>Pague um pouquinho por mês e viaje o ano todo!</p>
            </div>
            <div className={styles.taxesContainer}>
                <h3>Taxa de adesão OFF</h3>
                <p>
                    Faça parte do Clube Bancorbrás e aproveite! Taxa de Adesão única de <span className={styles.redPrice}>R$ 395,00</span> <span className={styles.bluePrice}>por R$ 0,00</span>
                </p>
            </div>
            <div className={styles.plansContainer}>
                {plansClub.map((plan, index) =>
                    <div key={`${plan.name}-${plan.type}-${index}`} className={styles.planItem}>
                        <ClubPlan plan={plan} openModal={openModal} />
                    </div>
                )}
            </div>
        </div>
    )
}