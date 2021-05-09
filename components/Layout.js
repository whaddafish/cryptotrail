import Head from 'next/head'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>CryptoTrail</title>
      </Head>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
