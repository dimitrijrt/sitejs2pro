import { useParams} from 'react-router-dom'

import logo from '../../assets/images/Carrousel.png';
import data from '../../location.json'
import Card from '../../components/Card/card.jsx'
import style from '../../style.scss'
import pagestyle from './location.scss'
import {useEffect, useState} from "react";
import Stars from "../../assets/icons/Stars"
import Carrousel from '../../components/Carrousel/carrousel'






function Location() {
    const {id} = useParams();
    const location = data.find((item) => item.id === id);

    return (
        
        <div>
            
            <img className='img' src={location.pictures[0]} alt="freelance"/>
            <Carrousel/>
            
            
           
           
            <div className='titrestars'>
                <span className='titre'>{location.title}</span>
                 
                <li className='stars'>
                    <Stars/>
                    <Stars/>
                    <Stars/>
                    <Stars/>
                    <Stars/>          
                </li>
             </div>
             <div className='link'>
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span>
            </div>
           
             <div className='cardcontainloc'>
                <Card 
                    description={location.description}
                    rating={location.rating}
                    equipments={location.equipments}
                />
             </div>
                
      
            
                
            
                
                
         

        </div>
    )
}

export default Location