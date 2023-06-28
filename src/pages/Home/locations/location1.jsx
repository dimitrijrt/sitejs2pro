import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../Carrousel.png';
import location from '../../../location.json'
import Card from '../../../components/Header/Card/card.jsx'
import style from '../../../style.scss'




const LocationImage = styled.img `
width:100%;
display:flex;
justify-content:center
height:415px;
object-fit:contain;
border-radius:40px
`

const CardsContainer = styled.div `
 display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

function location1() {
  return (
    <div>
        <LocationImage src={logo} alt="freelance"  />
        <CardsContainer>
                {location.map((logement,index) => (
                <Card
                     key={`${logement.name}-${index}`}
                     description={logement.description}
                     title={logement.title}
                     rating={logement.rating}
                    
                />
            ))}
            </CardsContainer>
    </div>
     
  )
}

export default location1