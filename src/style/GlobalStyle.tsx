import { Global, css } from '@emotion/react'

export const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                * {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                }
                body {
                    box-sizing: border-box;
                    background-color: #faf4eb;
                }
            `}
        />
    )
}
