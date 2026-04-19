import { useEffect } from 'react'
import About from '../components/About'
import './AboutPage.css'

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      <About variant="page" />
    </div>
  )
}

export default AboutPage
