
import styled from 'styled-components'
import logo from '../../assets/images/Image-source1.png'
import style from '../../style.scss'
import {useNavigate} from "react-router-dom";
import data from '../../location.json';
import stylepage from './home.scss'

const HomeImage = styled.img `


`

const CardsContainer = styled.div`
    
   
    
    
`
const Card = styled.div`




`
function Home() {
    const navigate = useNavigate();
    const locationFiltered = data.slice(0, 6);

  return (
    <div>


       <HomeImage className="homeimg" src={logo} alt="freelance"  />
       <CardsContainer className='cardcontain'>
           {locationFiltered.map((location, index) => (
               <Card className='card' key={index} onClick={() => navigate(`/location/${location.id}`)}>
                   <span className='titrehome'>{location.title}</span>
               </Card>
           ))}
       </CardsContainer>
    </div>
  )
    
    
}



export default Home
