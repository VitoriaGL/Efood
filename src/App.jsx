import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { AppContainer } from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App

