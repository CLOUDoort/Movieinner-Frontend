import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import Image from 'next/image'

const MovieInfoActor = (props) => {
    const { actorInfo } = props
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className='mySwiper'
        >
            {actorInfo.map((obj: any) => (
                <SwiperSlide key={obj.name}>
                    <Image src={`https://image.tmdb.org/t/p/w500${obj.profile_path}`} layout='fill' alt={obj.name} />
                    <p>{obj.name}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MovieInfoActor
