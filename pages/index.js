import Head from 'next/head'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import About from '@components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bumpybot | Urban Information Lab</title>
        <link rel="icon" href="images/BumpyBotLogoSmall.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <header className='fixed w-screen z-50'>
        <Nav navigation={
          [
            { name: 'About', href: '/', current: true },
            { name: 'Team', href: '/team', current: false },
            { name: 'Contact', href: '/contact', current: false },
          ]
        }/>
      </header>

      <main>
        <About />
        <Footer />
      </main>
    </div>
  )
}
