import { useLayoutEffect } from 'react'
import Work from '../components/Work'
import Footer from '../components/Footer'
import useSnapScroll from '../hooks/useSnapScroll'
import '../styles/snap.css'
import '../styles/page-enter.css'
import './WorkPage.css'

function WorkPage() {
  // Reset scroll BEFORE useSnapScroll runs so its initial panel-sync
  // starts from the top instead of snapping to whatever card the
  // previous route happened to be near.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useSnapScroll('.work__card, .footer')

  return (
    <div className="work-page page-enter-stagger">
      <Work />
      <Footer />
    </div>
  )
}

export default WorkPage
