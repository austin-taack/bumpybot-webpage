import Head from 'next/head'
import Script from 'next/script'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import About from '@components/About'

export default function Home() {
  const page = "About"

  return (
    <div>
      <Head>
        <title>About | BumpyBot</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

      <header className='fixed w-screen z-50'>
        <Nav page={page} />
      </header>

      <main>
        <About />
      </main>
      
      <Footer />
    </div>
  )
}
