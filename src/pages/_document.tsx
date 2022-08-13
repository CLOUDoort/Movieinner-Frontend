import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
    <Html>
        <Head>
            <script defer src='https://developers.kakao.com/sdk/js/kakao.js'></script>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document
