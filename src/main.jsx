import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Hide app content synchronously on first visit so the loader shows first
// (no flash of the site before the overlay mounts).
if (typeof window !== 'undefined' && !sessionStorage.getItem('mk_loader_seen')) {
  document.documentElement.classList.add('loader-active')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
