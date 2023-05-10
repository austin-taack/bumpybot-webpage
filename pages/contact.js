import Head from 'next/head'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import ContactCard from '@components/ContactCard'

export default function Contact() {
  const page = "Contact"

  return (
    <div>
      <Head>
        <title>Contact | BumpyBot</title>
        <link rel="icon" href="images/BumpyBotLogoSmall.png" />
      </Head>

      <header className='fixed w-screen z-50'>
        <Nav page={page} />
      </header>

      <main>
        <ContactCard />
      </main>

      <Footer />
    </div>
  )
}