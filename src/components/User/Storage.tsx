import { useState } from 'react'

const Storage = () => {
    const [liked, setLiked] = useState({
        theme: [],
        movie: [],
    })
    const [watched, setWatched] = useState([])
    return (
        <>
            <p>찜한 테마</p>
            <p>좋아요 누른 영화</p>
            <p>최근 감상한 작품</p>
        </>
    )
}

export default Storage
