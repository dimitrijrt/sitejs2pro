
import img from '../../assets/images/Image-source2.png';
import styled from 'styled-components'
import styles from './Apropos.module.scss';
import Respect from '../../components/Card/respect.jsx'
import Fiabilite from '../../components/Card/respect.jsx'
import Securite from '../../components/Card/respect.jsx'
import Service from '../../components/Card/respect.jsx'









function Apropos() {
  return (
    <div className='cardpropos'>
     
       <img src={img} alt="photo"  className="image"  />
        <Respect></Respect>
        <Fiabilite></Fiabilite>
        <Securite></Securite>
        <Service></Service>

        
        
       
    </div>
  )
    
    
}



export default Apropos