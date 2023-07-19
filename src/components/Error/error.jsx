import styled from 'styled-components'
import { Link } from 'react-router-dom'
import style from '../../style.scss'
import stylepage from './error.scss'
import {useNavigate} from "react-router-dom";








function Error() {
  const navigate = useNavigate();
  return (
    
    <div className='Body'>
        <div className='title'>404</div>
        <p className='errortxt'>oups la page que vous demandez n'existe pas</p>
        <a  className='link' onClick={() => navigate(`/`)}>Retourner à la page d'accueil</a>
    </div>
    
    
      
    
      
   
    
   
   
  )
}

export default Error;