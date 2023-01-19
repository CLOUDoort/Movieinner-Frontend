import { ActorAreaCard, ActorImageBox, ActorTitleBox, MovieActorContainer, MovieActorList, MovieActorScroll } from "../MovieInfo/MovieActorInfo.style"
import Image from "next/image"
import { useRouter } from "next/router"

const IndexUpComingList = (props) => {
    const router = useRouter()
    const { upComingList } = props
    return (
        <MovieActorScroll>
            <div>개봉예정작</div>
            <MovieActorContainer>
                <div>
                    <MovieActorList>
                        {upComingList?.map((obj: any) => (
                            <ActorAreaCard key={obj.id}>
                                <div>
                                    <ActorImageBox onClick={() => router.push(`/movie/${obj.id}`)}>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/original/${obj.poster_path}`}
                                            id={obj.movie_name}
                                            width={180}
                                            height={200}
                                            objectFit='contain'
                                            alt={obj.movie_name}
                                        />
                                    </ActorImageBox>
                                    <ActorTitleBox>
                                        <strong onClick={() => router.push(`/movie/${obj.id}`)}>{obj.title}</strong>
                                        <p>{obj.release_date}</p>
                                    </ActorTitleBox>
                                </div>
                            </ActorAreaCard>
                        ))}
                    </MovieActorList>
                </div>
            </MovieActorContainer>
        </MovieActorScroll>
    )
}

export default IndexUpComingList