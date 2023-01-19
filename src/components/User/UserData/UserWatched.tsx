import { useEffect, useState } from 'react'
import { StorageMovieScroll, StorageMovieContainer, StorageMovieList, StorageMovieAreaCard, StorageMovieImgBox, StorageMovieTitleBox } from './UserStorage.style'
import Router from 'next/router'
import Image from 'next/image'

const UserWatched = () => {
    const [watched, setWatched] = useState([])

    useEffect(() => {
        try {
            const previousWatchedReq = window.indexedDB.open('movieinfo', 1)
            let previousWatched
            // 버전이 바뀔 때마다 실행되는 이벤트에서 object store 생성
            previousWatchedReq.onupgradeneeded = (e: any) => {
                console.info('database upgrade success!')
                previousWatched = e.target.result
                previousWatched.createObjectStore('watched', { keyPath: 'id', autoIncrement: true })
            }
            previousWatchedReq.onsuccess = (e: any) => {
                previousWatched = e.target.result
                let store = previousWatched.transaction('watched', 'readonly').objectStore('watched')
                let getAllList = store.getAll()
                getAllList.onsuccess = (e) => {
                    setWatched(e.target.result)
                }
            }
            previousWatchedReq.onerror = (e: any) => {
                const error = e.target.error
                console.error(error)
            }
        } catch (e) {
            console.error(e.response)
        }
    }, [])

    return (
        <StorageMovieScroll>
            <p>최근 본 영화</p>
            <StorageMovieContainer>
                <div>
                    <StorageMovieList>
                        {watched.map((obj) => (
                            <StorageMovieAreaCard key={obj.id}>
                                <div>
                                    <StorageMovieImgBox onClick={() => Router.push(`/movie/${obj.movieId}`)}>
                                        <Image src={`https://image.tmdb.org/t/p/original${obj.poster_path}`} layout='fill' alt={obj.name} />
                                    </StorageMovieImgBox>
                                    <StorageMovieTitleBox>
                                        <strong onClick={() => Router.push(`/movie/${obj.movieId}`)}>{obj.title}</strong>
                                    </StorageMovieTitleBox>
                                </div>
                            </StorageMovieAreaCard>
                        ))}
                    </StorageMovieList>
                </div>
            </StorageMovieContainer>
        </StorageMovieScroll>
    )
}

export default UserWatched
