import Head from 'next/head'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import ContactCard from '@components/ContactCard'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Bumpybot | Urban Information Lab</title>
        <link rel="icon" href="/UrbanInfoLabIcon.png" />
      </Head>

      <header className='fixed w-screen z-50'>
        <Nav navigation={
          [
            { name: 'About', href: '/', current: false },
            { name: 'Team', href: '/team', current: false },
            { name: 'Contact', href: '/contact', current: true },
          ]
        }/>
      </header>

      <main>
        <ContactCard />
        <Footer />
      </main>
    </div>
  )
}