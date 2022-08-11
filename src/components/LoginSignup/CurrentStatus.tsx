import { CircleBox, CircleDiv, CurrentStatusDiv, CurrentTextDiv, HorizontalRule, StatusCircleDiv } from './CurrentStatus.style'

const CurrentStatus = () => {
    return (
        <>
            <CurrentStatusDiv>
                <CurrentTextDiv>
                    <div>이메일 인증</div>
                    <div>비밀번호 설정</div>
                    <div>유저 정보</div>
                </CurrentTextDiv>
                <HorizontalRule>
                    <hr />
                </HorizontalRule>
                <CircleBox>
                    <StatusCircleDiv></StatusCircleDiv>
                    <StatusCircleDiv></StatusCircleDiv>
                    <CircleDiv></CircleDiv>
                </CircleBox>
            </CurrentStatusDiv>
        </>
    )
}

export default CurrentStatus
