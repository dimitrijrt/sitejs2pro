import styled from 'styled-components'
import { Link } from 'react-router-dom'
import style from '../../style.scss'
import stylepage from './error.scss'









function Error() {
  return (
    
    <div className='Body'>
        <div className='title'>404</div>
        <p>oups la page que vous demandez n'existe pas</p>
        <a href="/home" className='link'>Retourner à la page d'accueil</a>
    </div>
    
    
      
    
      
   
    
   
   
  )
}

export default Error;