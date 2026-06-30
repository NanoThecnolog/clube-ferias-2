import { howWorkTexts } from '@/common/variables/HowWorksTexts'
import styles from './styles.module.scss'

interface Props {
    openModal: () => void
}

export default function ClubHowWorks({ openModal }: Props) {
    const videoUrl = "https://www.youtube.com/embed/Ns4gPSGexW8?autoplay=1&mute=1&loop=1&playlist=Ns4gPSGexW8"
    return (
        <div className={styles.content}>
            <div>
                <h4>Como funciona</h4>
                <div>
                    <h1>Conheça o Clube Bancorbrás</h1>
                    <h4>Com pequenas mensalidades, você garante sua hospedagem e tem sempre um motivo para viajar mais e explorar novos destinos.</h4>
                </div>
                <div className={styles.howWorksContainer}>
                    {
                        howWorkTexts.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className={styles.itemContainer}>
                                    <div className={styles.svgContainer}>
                                        <svg width="93" height="90" viewBox="0 0 93 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.129312 1.22064C29.9189 0.861913 75.3604 -10.3618 92.7905 87.8123C62.9128 94.801 5.65283 82.201 0.129312 1.22064Z" fill="currentColor"></path>
                                        </svg>
                                        <Icon className={styles.icon} />
                                    </div>
                                    <div className={styles.itemContent}>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        }

                        )
                    }

                </div>
            </div>
            <div className={styles.videoContainer}>
                <div className={styles.videoElement}>
                    {
                        <iframe
                            src={videoUrl}
                            frameBorder="0"
                            title="Vídeo institucional"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />

                        /*<video
                        src={videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        preload='metadata'
                    />*/
                    }
                </div>
                <div className={styles.buttonContainer}>
                    <button type='button' onClick={openModal}>Comece a economizar em suas viagens!</button>
                </div>
            </div>
        </div>
    )
}