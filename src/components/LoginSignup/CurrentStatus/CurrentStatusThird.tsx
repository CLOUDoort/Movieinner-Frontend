import { CircleBox, CircleDiv, CurrentStatusDiv, CurrentTextDiv, HorizontalRule, StatusCircleDiv } from './CurrentStatus.style'

const CurrentStatusThird = () => {
    return (
        <>
            <CurrentStatusDiv>
                <CurrentTextDiv>
                    <div>이메일 입력</div>
                    <div>비밀번호 설정</div>
                    <div>유저 정보 입력</div>
                </CurrentTextDiv>
                <HorizontalRule>
                    <hr />
                </HorizontalRule>
                <CircleBox>
                    <StatusCircleDiv />
                    <StatusCircleDiv />
                    <StatusCircleDiv />
                </CircleBox>
            </CurrentStatusDiv>
        </>
    )
}

export default CurrentStatusThird
