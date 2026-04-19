import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import BottomNav from './components/BottomNav'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <BottomNav />
      </main>
    </BrowserRouter>
  )
}

export default App
