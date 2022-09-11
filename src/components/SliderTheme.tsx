import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import Image from 'next/image'

function Arrow(props) {
    const disabeld = props.disabled ? ' arrow--disabled' : ''
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
        >
            {props.left && <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />}
            {!props.left && <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />}
        </svg>
    )
}

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <>
            <div className='navigation-wrapper'>
                <div ref={sliderRef} className='keen-slider'>
                    <div>
                        <Image
                            className='keen-slider__slide number-slide1'
                            src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg'
                            alt='이미지'
                            width={500}
                            height={400}
                        />
                    </div>
                    <div>
                        <Image
                            className='keen-slider__slide number-slide2'
                            src='https://image.tmdb.org/t/p/w500/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg'
                            alt='이미지'
                            width={500}
                            height={400}
                        />
                    </div>
                    <div>
                        <Image
                            className='keen-slider__slide number-slide3'
                            src='https://image.tmdb.org/t/p/w500/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg'
                            alt='이미지'
                            width={500}
                            height={400}
                        />
                    </div>
                    <div>
                        <Image
                            className='keen-slider__slide number-slide4'
                            src='https://image.tmdb.org/t/p/w500/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg'
                            alt='이미지'
                            width={500}
                            height={400}
                        />
                    </div>
                    <div>
                        <Image
                            className='keen-slider__slide number-slide5'
                            src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg'
                            alt='이미지'
                            width={500}
                            height={400}
                        />
                    </div>
                    <div>
                        <Image
                            className='keen-slider__slide number-slide6'
                            src='https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg'
                            alt='이미지'
                            width={500}
                            height={400}
                        />
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

                        <Arrow
                            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                        />
                    </>
                )}
                {loaded && instanceRef.current && (
                    <div className='dots'>
                        {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                                ></button>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

export default Slider
