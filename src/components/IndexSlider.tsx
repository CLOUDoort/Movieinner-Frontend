import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'

const IndexSlider = () => {
    const [image, setImage] = useState({})

    // 6개 테마의 백드롭 이미지 불러오기
    useEffect(() => {
        const getImage = async () => {
            const backDropImage = await apiInstance.get('')
        }
        getImage()
    })
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
                    <Image
                        src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg'
                        alt='이미지'
                        width={700}
                        height={300}
                        onClick={() => console.log('success')}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg' alt='이미지' width={700} height={300} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default IndexSlider
