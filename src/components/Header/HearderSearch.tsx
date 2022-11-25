import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { SearchContainer, SecondHearderSearchDiv } from './Header.style'

const HearderSearch = () => {
    const router = useRouter()
    const [click, setClick] = useState(false)

    const handleSearch = () => {
        router.push('/search')
    }
    const clickSearchImg = () => {
        setClick(!click)
    }
    return (
        <>
            <SecondHearderSearchDiv>
                <SearchContainer click={click}>
                    <BsSearch onClick={clickSearchImg} size={30} />
                    <input type='text' placeholder='제목, 사람' autoFocus onKeyDown={handleSearch} autoComplete='off' />
                </SearchContainer>
            </SecondHearderSearchDiv>
        </>
    )
}

export default HearderSearch
