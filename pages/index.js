import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bumpybot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This web page is currently under construction" />
        <p className="description">
          by the <a href="https://sites.utexas.edu/uil/">Urban Information Lab</a> and the <a href="https://sites.utexas.edu/hcrl/">Human Centered Robotics Group</a> at the <a href="https://www.utexas.edu/">University of Texas at Austin.</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
