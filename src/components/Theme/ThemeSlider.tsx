import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

const ThemeSlider = (props) => {
    const { openModal } = props

    return (
        <>
            <Swiper
                cssMode={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} onClick={openModal} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} onClick={openModal} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} onClick={openModal} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} onClick={openModal} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} onClick={openModal} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} onClick={openModal} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ThemeSlider
