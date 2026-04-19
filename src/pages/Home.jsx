import Hero from '../components/Hero'
import Work from '../components/Work'
import Footer from '../components/Footer'
import useSnapScroll from '../hooks/useSnapScroll'
import '../styles/snap.css'
import './Home.css'

function Home() {
  useSnapScroll('.hero, .work__card, .footer')

  return (
    <div className="home-page">
      <Hero />
      <Work limit={3} showCta />
      <Footer />
    </div>
  )
}

export default Home
