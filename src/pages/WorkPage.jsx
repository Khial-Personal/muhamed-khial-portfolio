import Work from '../components/Work'
import Footer from '../components/Footer'
import useSnapScroll from '../hooks/useSnapScroll'
import '../styles/snap.css'
import './WorkPage.css'

function WorkPage() {
  useSnapScroll('.work__card, .footer')

  return (
    <div className="work-page">
      <Work />
      <Footer />
    </div>
  )
}

export default WorkPage
