import { Global, css } from '@emotion/react'
import { Reset } from 'styled-reset'

export const GlobalStyle = () => {
    return (
        <>
            <Global
                styles={css`
                    * {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        box-sizing: border-box;
                    }
                    body {
                        min-height: 100vh;
                        background-color: #2e2e2e;
                        color: white;
                    }
                    a {
                        text-decoration-line: none;
                        color: white;
                        cursor: pointer;
                    }
                    button {
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    input {
                        border-radius: 5px;
                    }
                `}
            />
            <Reset />
        </>
    )
}
