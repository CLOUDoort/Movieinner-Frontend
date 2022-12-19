import { LoadingContainer, LoadingPage, LoadingText, LoadingView } from './LoadingCircle.style'

const LoadingCircle = () => {
    return (
        <LoadingPage>
            <LoadingContainer>
                <LoadingView />
                <LoadingText>Loading</LoadingText>
            </LoadingContainer>
        </LoadingPage>
    )
}

export default LoadingCircle
