import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Home from './pages/Home/home.jsx'
import Footer from './components/Footer/footer.jsx'
import Location from './pages/Location/Location.jsx'
import Apropos from './pages/Apropos/Apropos.jsx'
import Error from './components/Error/error.jsx'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/location/:id" element={<Location />} />
      
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404"/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)