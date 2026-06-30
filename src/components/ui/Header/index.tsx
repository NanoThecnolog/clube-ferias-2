import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from "react-icons/md";
import styles from './styles.module.scss'
import { useMemo } from 'react';
import { contato } from '@/common/variables/contato';


export default function Header() {

    const message = useMemo(() => {
        return 'Olá, gostaria de mais informações!'
    }, [])

    const handleSend = () => {
        const phone = contato.phone
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

        window.open(url, '_blank')
    }

    const openEmailApp = ({
        to,
        subject,
        body,
    }: {
        to?: string
        subject?: string
        body?: string
    }) => {
        const query: string[] = []

        if (subject) {
            query.push(`subject=${encodeURIComponent(subject)}`)
        }

        if (body) {
            query.push(`body=${encodeURIComponent(body)}`)
        }

        const mailto = `mailto:${to || ''}${query.length ? `?${query.join('&')}` : ''
            }`

        window.location.href = mailto
    }

    const normalizePhone = (phone: number) => {
        const cleaned = phone.toString().replace(/\D/g, '')

        if (!cleaned.startsWith('55') || cleaned.length < 12) return phone

        const ddd = cleaned.slice(2, 4)
        const number = cleaned.slice(4)
        const partOne = number.slice(0, 5)
        const partTwo = number.slice(5)

        return `(${ddd}) ${partOne}-${partTwo}`
    }
    return (
        <nav className={styles.navContainer}>
            <div className={styles.phoneContainer} onClick={handleSend}>
                <IoLogoWhatsapp size={20} />
                <span>{normalizePhone(contato.phone)}</span>
            </div>
            <div className={styles.emailContainer} onClick={() => openEmailApp({ to: contato.email, subject: 'Quero saber mais', body: 'Estou interessado, quero mais informações.' })}>
                <MdEmail />
                <span>{contato.email}</span>
            </div>
        </nav>
    )
}