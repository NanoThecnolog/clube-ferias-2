import { PlansClub } from '@/common/variables/plans'
import styles from './styles.module.scss'
import { FaUserGroup } from 'react-icons/fa6'
import { HiUserGroup } from 'react-icons/hi'

interface Props {
    plan: PlansClub
    openModal: () => void
}

export default function ClubPlan({ plan, openModal }: Props) {

    if (!plan) return null
    return (
        <div className={styles.container} style={{ "--plan-color": plan.color } as React.CSSProperties}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    Plano <span className={styles.planName}>{plan.name}</span>
                </h1>
                <p className={styles.planDaily}>
                    {plan.daily}
                </p>
            </div>
            <div className={styles.planTypeContainer}>
                <div className={styles.iconType}>
                    {plan.type === "duplo" && <FaUserGroup />}
                    {plan.type === "triplo" && <HiUserGroup />}
                </div>
                <p className={styles.planType}>{plan.type}</p>
            </div>
            <div className={styles.planPriceContainer}>
                <div className={styles.price}>
                    <span>R$</span>
                    <strong>{plan.value.toFixed(2).replace(".", ",")}</strong>
                </div>
                <p>por mês</p>
            </div>
            <div className={styles.planArgumentsContainer}>
                <ul className={styles.argList}>
                    {plan.arguments.map((arg, index) =>
                        <li key={index} className={styles.arg}>
                            <p>{arg}</p>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <button
                    type='button'
                    className={styles.button}
                    onClick={openModal}
                >Mais Informações</button>
            </div>
        </div>
    )
}