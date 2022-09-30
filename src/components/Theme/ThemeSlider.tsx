import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

const ThemeSlider = (props) => {
    const { openModal, sliderImage } = props
    console.log(sliderImage)
    return (
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
                <SwiperSlide key={obj.movie_id}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w1280${obj.backdrop_path}`}
                        alt={obj.theme_name}
                        id={obj.theme_name}
                        onClick={openModal}
                        layout='fill'
                        priority={true}
                    />
                    <div>{obj.theme_name}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ThemeSlider
