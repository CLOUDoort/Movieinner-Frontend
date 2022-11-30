import { ActorAreaCard, ActorImageBox, ActorTitleBox, MovieActorContainer, MovieActorList, MovieActorScroll } from "../MovieInfo/MovieInfo.style"
import Image from "next/image"

const IndexPopularList = (props) => {
    const { popularMovie } = props
    return (
        <MovieActorScroll>
            <div>금주의 인기 영화</div>
            <MovieActorContainer>
                <div>
                    <MovieActorList>
                        {popularMovie?.map((obj: any) => (
                            <ActorAreaCard key={obj.id}>
                                <div>
                                    <ActorImageBox>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/original/${obj.poster_path}`}
                                            id={obj.movie_name}
                                            width={180}
                                            height={200}
                                            objectFit='contain'
                                        />
                                    </ActorImageBox>
                                    <ActorTitleBox>
                                        <strong>{obj.title}</strong>
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

export default IndexPopularList