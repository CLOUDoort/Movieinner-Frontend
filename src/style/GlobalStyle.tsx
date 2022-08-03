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
                        background-color: #2e2e2e;
                        color: white;
                        padding-top: 100px !important;
                    }
                    a {
                        text-decoration-line: none;
                        color: white;
                        cursor: pointer;
                    }
                    a:hover,
                    button:hover {
                        text-decoration-line: underline;
                    }
                `}
            />
            <Reset />
        </>
    )
}
