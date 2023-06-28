import styled from 'styled-components'
import { Link } from 'react-router-dom'
import style from '../../../style.scss'

const StyledLink = styled(Link) `
font-size:18px;

`
const Body = styled.div `
font-size:36px;

color:salmon;

text-align:center;

.title {
    font-size:288px;
    
}
`



function Error() {
  return (
    
    <Body>
        <div className='title'>404</div>
        <p>oups la page que vous demandez n'existe pas</p>
        <StyledLink to="/home">Retourner à la page d'accueil</StyledLink>
    </Body>
    
    
      
    
      
   
    
   
   
  )
}

export default Error;