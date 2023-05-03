import Head from 'next/head'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import TeamCard from '@components/TeamCard'

export default function Team() {
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
                { name: 'Team', href: '/team', current: true },
                { name: 'Contact', href: '/contact', current: false },
            ]
          }/>
        </header>
        <main>
          <TeamCard />
          <Footer />
        </main>
      </div>
    )
  }