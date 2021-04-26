import Document, { Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>My ecommerce</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
            </Html>
        )
    }
}