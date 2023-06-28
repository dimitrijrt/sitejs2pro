

import styled from 'styled-components'
import logo from '../../Image-source1.png'
import style from '../../style.scss'

const HomeImage = styled.img `
width:100%;
padding:20px;
height:223px;
object-fit:cover;
border-radius:40px;

`

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 340px 340px;
    grid-template-columns: repeat(3, 2fr);
    padding: 30px;
    border-radius:20px;
    background-color:#F6F6F6;
    
    
`
const Card = styled.div`
 background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
;
background-color:salmon;
;
border-radius:20px;
cursor:pointer;
width:340px;



`
function Home() {
  return (
    <div>
     
      <h1> Page d'accueil 🏠</h1>
       <HomeImage src={logo} alt="freelance"  />
       <CardsContainer>
        <Card href="/location">titre de la location</Card>
         <a href="/location"> <Card>titre de la location</Card></a>
         <Card>titre de la location</Card>
         <Card>titre de la location</Card>
         <Card>titre de la location</Card>
         <Card>titre de la location</Card>
       </CardsContainer>
    </div>
  )
    
    
}



export default Home
