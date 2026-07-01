import { FaWhatsapp } from 'react-icons/fa'
import styles from './styles.module.scss'
import { contato } from '@/common/variables/contato'
import { useMemo } from 'react'

export default function WhatsappButton() {

    const message = useMemo(() => {
        return 'Olá, gostaria de mais informações!'
    }, [])

    const handleSend = () => {
        const phone = contato.phone
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

        window.open(url, '_blank')
    }

    return (
        <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={handleSend}>
                <FaWhatsapp size={40} />
            </div>
        </div>
    )
}