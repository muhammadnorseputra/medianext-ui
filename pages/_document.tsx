import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id-ID">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;500;700;900&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/> 
          <meta name="description" content="Medianext UI &amp; Base theme with tailwindcss " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-gray-100 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument