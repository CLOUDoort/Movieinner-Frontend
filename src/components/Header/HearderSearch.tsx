import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNightlight } from 'react-icons/md'
import { SecondHearderSearchDiv } from './Header.style'

const HearderSearch = () => {
    const router = useRouter()

    const clickSearch = () => {
        router.push('/search')
    }


    return (
        <>
            <SecondHearderSearchDiv>
                <MdNightlight size={35} />
                <input type='text' placeholder='검색' onClick={clickSearch} />
            </SecondHearderSearchDiv>
        </>
    )
}

export default HearderSearch
