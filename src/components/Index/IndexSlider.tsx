import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { useRouter } from 'next/router'


const IndexSlider = (props) => {
    const { sliderImage } = props
    const router = useRouter()
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
            {sliderImage.map((obj) => (
                <SwiperSlide key={obj.movie_id} onClick={() => router.push(`/theme`)}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w1280${obj.backdrop_path}`}
                        id={obj.movie_name}
                        layout='fill'
                        priority={true}
                    />
                    <div>{obj.theme_name}</div>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default IndexSlider
