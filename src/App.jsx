import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import SaryCaseStudy from './pages/SaryCaseStudy'
import ZydaCaseStudy from './pages/ZydaCaseStudy'
import TalentHavenCaseStudy from './pages/TalentHavenCaseStudy'
import AquarabiaCaseStudy from './pages/AquarabiaCaseStudy'
import SixFlagsCaseStudy from './pages/SixFlagsCaseStudy'
import BottomNav from './components/BottomNav'
import Loader from './components/Loader'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work/sary" element={<SaryCaseStudy />} />
          <Route path="/work/zyda" element={<ZydaCaseStudy />} />
          <Route path="/work/talent-haven" element={<TalentHavenCaseStudy />} />
          <Route path="/work/aquarabia" element={<AquarabiaCaseStudy />} />
          <Route path="/work/six-flags" element={<SixFlagsCaseStudy />} />
        </Routes>
        <BottomNav />
      </main>
    </BrowserRouter>
  )
}

export default App
