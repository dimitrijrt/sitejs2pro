import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGOFOO.png';
import txt from '../../assets/images/txtkasa.png'
import stylepage from './footer.scss'




const FooterImage = styled.img `
`

function Footer() {
  return (
    <nav className='footer'>
      <FooterImage className='FooterImg' src={logo} alt="freelance"  />
      <p>c 2020 Kasa.All rights reserved</p>
    </nav>
  )
}

export default Footer
