import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGO.png';
import stylepage from './header.scss'
import {useNavigate} from "react-router-dom";







function Header() {
  const navigate = useNavigate();
  return (
    <Nav className='nav'>
    <div className="logo">
        <HeaderImage className='headerimg' src={logo} alt="freelance"  />
    </div>
      
      <div className='liens'>
        <span className='styledlink' onClick={() => navigate(`/`)}>Accueil</span>
        <span  className='styledlink' onClick={() => navigate(`/apropos`)}>A propos</span>
      
      </div>
      
      
      
    </Nav>
    
    
      
    
      
   
    
   
   
  )
}

const Nav = styled.nav `

`



const HeaderImage = styled.img`
  
`



export default Header