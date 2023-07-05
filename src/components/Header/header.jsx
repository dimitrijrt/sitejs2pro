import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGO.png';
import stylepage from './header.scss'


const StyledLink = styled(Link)``




function Header() {
  return (
    <Nav className='nav'>
    <div className="logo">
        <HeaderImage className='headerimg' src={logo} alt="freelance"  />
    </div>
      
      <div className='liens'>
        <StyledLink className='styledlink' to="/">Accueil</StyledLink>
        <StyledLink  className='styledlink' to="/apropos"$isFullLink>A propos</StyledLink>
      
      </div>
      
      
      
    </Nav>
    
    
      
    
      
   
    
   
   
  )
}

const Nav = styled.nav `

`



const HeaderImage = styled.img`
  
`



export default Header