import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../LOGO.png';


const StyledLink = styled(Link)`
    padding: 15px;
    color: salmon;
    text-decoration: none;
    font-size: 18px;
    text-decoration:underline;

`



function Header() {
  return (
    <Nav>
    <div className="logo">
        <HeaderImage src={logo} alt="freelance" height={80} width={80} />
    </div>
      
      <div className='liens'>
        <StyledLink to="/home">Accueil</StyledLink>
        <StyledLink to="/apropos"$isFullLink>A propos</StyledLink>
      
      </div>
      
      
      
    </Nav>
    
    
      
    
      
   
    
   
   
  )
}

const Nav = styled.nav `
display:flex;
justify-content:space-between;
`



const HeaderImage = styled.img`
    height: 80px;
    width: 100%;
    object-fit:cover
`



export default Header