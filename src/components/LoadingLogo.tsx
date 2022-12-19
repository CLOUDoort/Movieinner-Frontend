import { useEffect, useState } from "react"
import { LoadingLogoContainer, LoadingLogoDiv } from "./LoadingLogo.style"

const LoadingLogo = () => {
    const [darkTransition, setDarkTransition] = useState(false)
    useEffect(() => {
        setDarkTransition(true)
    }, [])

    return (
        <LoadingLogoContainer darkTransition={darkTransition}>
            <LoadingLogoDiv>
                Movie Inner
            </LoadingLogoDiv>
        </LoadingLogoContainer>
    )
}

export default LoadingLogo