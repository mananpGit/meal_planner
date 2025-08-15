import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MealPlanner from './pages/MealPlanner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MealPlanner />
  </StrictMode>,
)
