import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from 'swiper/modules'

interface Props {
    openModal: () => void
}

export default function BannerSlider({ openModal }: Props) {


    const banners = [
        "banner1.webp",
        "banner2.webp",
        "banner3.webp",
    ]
    const bannersMobile = [
        "banner1-mini.webp",
        "banner2-mini.webp",
        "banner3-mini.webp",
    ]

    return (
        <section className={styles.bannerSlider}>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                className={styles.swiper}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={banner} className={styles.slide}>
                        <button
                            type="button"
                            className={styles.bannerButton}
                            onClick={openModal}
                            aria-label="Entrar em contato"
                        >
                            <picture>
                                <source
                                    media="(max-width: 768px)"
                                    srcSet={`/${bannersMobile[index]}`}
                                />

                                <img
                                    src={`/${banner}`}
                                    alt={`Banner ${index + 1}`}
                                    className={styles.bannerImage}
                                />
                            </picture>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

/**
 * Aqui será um swiper com 3 banners. A largura da tela decidirá qual banner carregar (mini ou o normal)
 * O clique no banner deve abrir o modal pra contato
 */