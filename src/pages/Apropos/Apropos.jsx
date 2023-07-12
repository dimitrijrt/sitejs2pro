import img from '../../assets/images/Image-source2.png';
import './Apropos.scss';
import Collapse from "../../components/Collapse/Collapse";


function Apropos() {

    const data = [
        {
            title: 'Fiabilité',
            description: 'Les annonces postées sur Kasa grantissent une fiabilité totale.Les photos sont conformes aux logments et toutes les informations sont régulièrements vérifiées par nos équipes'
        },
        {
            title: 'Respect',
            description: 'Les annonces postées sur Kasa grantissent une fiabilité totale.Les photos sont conformes aux logments et toutes les informations sont régulièrements vérifiées par nos équipes'
        },        {
            title: 'Service',
            description: 'Les annonces postées sur Kasa grantissent une fiabilité totale.Les photos sont conformes aux logments et toutes les informations sont régulièrements vérifiées par nos équipes'
        },        {
            title: 'Sécurité',
            description: 'Les annonces postées sur Kasa grantissent une fiabilité totale.Les photos sont conformes aux logments et toutes les informations sont régulièrements vérifiées par nos équipes'
        },
    ]

  return (
    <div className='cardpropos'>
       <img src={img} alt="photo" className="image"  />
       <div className='collapse'> 
        {data.map((item, index) => (
            <Collapse item={item} key={index}/>
        ))}
        </div>
    </div>
  )
}

export default Apropos