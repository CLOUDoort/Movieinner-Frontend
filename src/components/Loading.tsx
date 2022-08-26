import { LoadingContainer, LoadingPage, LoadingText, LoadingView } from './Loading.style'

const Loading = () => {
    return (
        <LoadingPage>
            <LoadingContainer>
                <LoadingView />
                <LoadingText>Loading</LoadingText>
            </LoadingContainer>
        </LoadingPage>
    )
}

export default Loading
