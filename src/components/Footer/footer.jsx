import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGOFOO.png';
import txt from '../../assets/images/txtkasa.png'
import stylepage from './footer.scss'






function Footer() {
  return (
    <nav className='footer' id="f">
      <img className='FooterImg' src={logo} alt="freelance"  />
      <p>© 2020 Kasa.All rights reserved</p>
    </nav>
  )
}

export default Footer
