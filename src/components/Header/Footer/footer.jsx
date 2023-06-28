import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../LOGOFOO.png';
import txt from '../../../txtkasa.png'


const FooterImage = styled.img `
width:100%;
padding:20px;
height:50px;
background-color:black;
object-fit:contain;

`

const Footertxt = styled.img`
width:100%;
color:white;
object-fit:contain;
`

function Footer() {
  return (
    <nav>
      <FooterImage src={logo} alt="freelance"  />
      <Footertxt src={txt} alt="txt" />
      
    </nav>
  )
}

export default Footer
