import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNightlight } from 'react-icons/md'
import { SecondHearderSearchDiv } from './Header.style'

const HearderSearch = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const clickSearch = () => {
        router.push('/search')
    }

    return (
        <>
            <SecondHearderSearchDiv>
                <MdNightlight size={35} />
                <AiOutlineSearch size={35} />
                <input type='text' placeholder='검색' value={search} onChange={handleChange} onClick={clickSearch} />
            </SecondHearderSearchDiv>
        </>
    )
}

export default HearderSearch
