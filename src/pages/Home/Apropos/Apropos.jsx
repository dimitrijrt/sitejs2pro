
import img from '../../../Image-source2.png';
import styled from 'styled-components'
import location from '../../../location.json'
import Card from '../../../components/Header/Card/card.jsx'

const AproposImage = styled.img `
width:100%;
padding:20px;
height:223px;
object-fit:cover;
border-radius:40px;

`
const Rectangle = styled.div `
color:white;
height:52px;
width:80%;
background-color:salmon;
border-radius:10px;
margin-top:20px;
font-size:24px;
display:flex;
align-items:center;
padding-left:16px;




`

const RectangleContainer = styled.div `
margin-bottom:30px;

`




function Apropos() {
  return (
    <div>
     
      <h1> A propos</h1>
       <AproposImage src={img} alt="freelance"  />
       <RectangleContainer>
            <Rectangle>Flabilité</Rectangle>
            <Rectangle>Service</Rectangle>
            <Rectangle>Sécurité</Rectangle>
            <Rectangle>Contact</Rectangle>
       </RectangleContainer>
      
       
    </div>
  )
    
    
}



export default Apropos