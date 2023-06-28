import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Home from './pages/Home/home.jsx'
import Footer from './components/Header/Footer/footer.jsx'
import Location from './pages/Home/locations/location1.jsx'
import Apropos from './pages/Home/Apropos/Apropos.jsx'
import Error from './components/Header/Error/error.jsx'
import location from './location.json'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      
        <Route path="/location" element={<Location />} />
      
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)