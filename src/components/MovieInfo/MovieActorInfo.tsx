import Image from 'next/image'
import { ActorAreaCard, ActorImageBox, ActorTitleBox, MovieActorContainer, MovieActorList, MovieActorScroll } from './MovieInfo.style'

const MovieActorInfo = (props) => {
    const { actorInfo } = props
    return (
        <>
            <MovieActorScroll>
                <div>감독&#47;출연</div>
                <MovieActorContainer>
                    <div>
                        <MovieActorList>
                            {actorInfo.map((obj: any) => (
                                <ActorAreaCard key={obj.name}>
                                    <div>
                                        <ActorImageBox>
                                            <Image src={`https://image.tmdb.org/t/p/original${obj.profile_path}`} layout='fill' alt={obj.name} />
                                        </ActorImageBox>
                                        <ActorTitleBox>
                                            <strong>{obj.name}</strong>
                                            <p>{obj.character}</p>
                                        </ActorTitleBox>
                                    </div>
                                </ActorAreaCard>
                            ))}
                        </MovieActorList>
                    </div>
                </MovieActorContainer>
            </MovieActorScroll>
        </>
    )
}

export default MovieActorInfo
