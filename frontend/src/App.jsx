import { useState } from 'react'
import HomePage from './pages/HomePage';
import Search from "./pages/Search";
import SavedRecipes from './pages/SavedRecipes';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
            {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
            {currentPage === 'search' && <Search onNavigate={setCurrentPage} />}
            {currentPage === 'saved' && <SavedRecipes onNavigate={setCurrentPage} />}
    </>
  )
}

export default App
