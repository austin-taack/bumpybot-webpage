import Head from 'next/head'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import TeamCard from '@components/TeamCard'

export default function Team() {
    const page = "Team"
    
    return (
      <div>
        <Head>
          <title>Team | BumpyBot</title>
          <link rel="icon" href="images/BumpyBotLogoSmall.png" />
        </Head>
  
        <header className='fixed w-screen z-50'>
          <Nav page={page} />
        </header>
        <main>
          <TeamCard />
        </main>

        <Footer />
      </div>
    )
  }