import { FaQuoteLeft } from 'react-icons/fa6'
import styles from './styles.module.scss'
import { testimonials } from '@/common/variables/testimonials'
import TestimonialCard from '../ui/TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

export default function Testimonials() {

    return (
        <section className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <FaQuoteLeft />
                    <h1>Experiências de quem já viajou com a gente</h1>
                </div>
                <div className={styles.logoContainer}>
                    <img src="logo1.svg" alt="Logo testemunhos" />
                </div>
            </div>
            <div className={styles.sliderContainer}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={2.5}
                    spaceBetween={10}
                    //loop
                    pagination={{
                        clickable: true,
                        //el: `.${styles.pagination}`
                    }}
                    /*
                    navigation={{
                        prevEl: `.${styles.prevButton}`,
                        nextEl: `.${styles.nextButton}`
                    }}
                     */
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16
                        },
                        768: {
                            slidesPerView: 1.4,
                            spaceBetween: 20
                        },
                        1100: {
                            slidesPerView: 2.5,
                            spaceBetween: 20
                        }
                    }}
                    className={styles.swiper}
                >
                    {testimonials.map((card, index) =>
                        <SwiperSlide key={index} className={styles.slide}>
                            <TestimonialCard card={card} />
                        </SwiperSlide>
                    )}
                </Swiper>
                {
                    /**
                     <div className={styles.controls}>
                    <div className={styles.pagination} />

                    <div className={styles.navigation}>
                        <button type="button" className={styles.prevButton}>
                            ‹
                        </button>

                        <button type="button" className={styles.nextButton}>
                            ›
                        </button>
                    </div>
                </div>
                     */
                }
            </div>

        </section>
    )
}