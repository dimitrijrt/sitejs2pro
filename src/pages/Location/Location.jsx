import { useParams} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/Carrousel.png';
import data from '../../location.json'
import Card from '../../components/Card/card.jsx'
import style from '../../style.scss'
import pagestyle from './location.scss'


const LocationImage = styled.img`
  
`

const CardsContainer = styled.div`
 
`

function Location() {
    const {id} = useParams();
    const location = data.find((item) => item.id === id);

    return (
        
        <div>
            
            <LocationImage className='img' src={location.pictures[0]} alt="freelance"/>
            <div className='link'>
                <button>vrbrvio</button>
                <button>vrbrvio</button>
                <button>vrbrvio</button>
            </div>
           
             <span className='titre'>{location.title}</span>
            <CardsContainer className='cardcontainloc'>
                <Card 
                    description={location.description}
                    rating={location.rating}
                     equipments={location.equipments}
                />
                
            </CardsContainer>
            
                
                
         

        </div>
    )
}

export default Location