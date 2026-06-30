import { useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { contato } from '@/common/variables/contato'

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function Modal({ isOpen, onClose }: Props) {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [registration, setRegistration] = useState('')
    const [email, setEmail] = useState('')

    const message = useMemo(() => {
        return [
            'Olá, gostaria de mais informações!',
            '',
            `Nome: ${name}`,
            `CPF: ${cpf}`,
            `Matrícula: ${registration || '-'}`,
            `E-mail: ${email}`,
        ].join('\n')
    }, [name, cpf, registration, email])

    const handleSend = () => {
        const phone = contato.phone

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

        window.open(url, '_blank')

        onClose()
    }

    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    title='Fechar'
                >
                    ×
                </button>

                <h2>Solicitar informações</h2>

                <div className={styles.form}>
                    <div className={styles.field}>
                        <label>Nome</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Nome completo'
                        />
                    </div>

                    <div className={styles.field}>
                        <label>CPF</label>

                        <input
                            type="text"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder='12345678987'
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Matrícula (opcional)</label>

                        <input
                            type="text"
                            value={registration}
                            onChange={(e) => setRegistration(e.target.value)}
                            placeholder='Se já é membro, digite sua matricula'
                        />
                    </div>

                    <div className={styles.field}>
                        <label>E-mail</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Seu melhor e-mail'
                        />
                    </div>

                    <button
                        type="button"
                        className={styles.submitButton}
                        onClick={handleSend}
                    >
                        Solicitar informações
                    </button>
                </div>
            </div>
        </div>
    )
}