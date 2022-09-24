import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import Image from 'next/image'

const MovieInfoActor = (props) => {
    const { actorInfo } = props
    return (
        <Swiper
            cssMode={true}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className='mySwiper'
        >
            {actorInfo.map((obj) => (
                <SwiperSlide className='swiper-movieInfo-slide' key={obj.name}>
                    <Image src={`https://image.tmdb.org/t/p/w500${obj.profile_path}`} layout='fill' alt={obj.name} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MovieInfoActor
