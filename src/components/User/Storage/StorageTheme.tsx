import Image from 'next/image'
import Router from 'next/router'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { StorageThemeDiv } from './Storage.style'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

const StorageTheme = (props) => {
    const { themeLiked } = props
    return (
        <StorageThemeDiv>
            <p>찜한 테마</p>
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
                {themeLiked.map((obj: any) => (
                    <SwiperSlide key={obj.idx}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w1280${obj.backdrop_path}`}
                            alt={obj.name}
                            onClick={() => Router.push('/theme')}
                            layout='fill'
                            priority={true}
                        />
                        <div>{obj.name}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StorageThemeDiv>
    )
}

export default StorageTheme
