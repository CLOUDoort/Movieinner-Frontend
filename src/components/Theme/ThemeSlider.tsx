import { useState } from 'react'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

const ThemeSlider = (props) => {
    const { openModal, sliderImage } = props
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
                {sliderImage.map((obj: any) => (
                    <SwiperSlide key={obj.idx}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                            alt='이미지'
                            width={700}
                            height={300}
                            onClick={openModal}
                            objectFit='contain'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ThemeSlider
