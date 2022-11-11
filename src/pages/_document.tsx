import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
    <Html>
        <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' rel='stylesheet' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document
