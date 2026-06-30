import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'
import { Pagination } from 'swiper/modules'

export default function Partners() {
    const partners = [
        "partners/1.png",
        "partners/2.png",
        "partners/3.png",
        "partners/4.png",
        "partners/5.jpg",
        "partners/6.png",
        "partners/7.jpg",
        "partners/8.png",
        "partners/9.png",
        "partners/10.png",
        "partners/11.jpg",
        "partners/12.png",
        "partners/13.png",
        "partners/14.png",
        "partners/15.jpg",
        "partners/16.jpg",
    ]
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Conheça nossos parceiros</h1>
                <p>Veja quem nos ajuda a tornar sua experiência ainda melhor</p>
            </div>
            <div className={styles.partnersContainer}>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={6}
                    spaceBetween={10}
                    loop
                    pagination={{ clickable: true }}
                    className={styles.swiper}
                    breakpoints={{
                        0: {
                            slidesPerView: 4,
                            spaceBetween: 5
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 7
                        },
                        1100: {
                            slidesPerView: 6,
                            spaceBetween: 10
                        }
                    }}
                >
                    {partners.map((path, index) =>
                        <SwiperSlide className={styles.slide}>
                            <img src={path} alt={`Logo ${index + 1}`} />
                        </SwiperSlide>
                    )}
                </Swiper>

            </div>
        </section>
    )
}