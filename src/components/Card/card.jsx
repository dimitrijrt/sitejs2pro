import PropTypes from 'prop-types'
import style from './card.scss'
import React, { useState } from 'react';
import ArrowUp from "../../assets/icons/ArrowUp";
import Arrowlft from "../../assets/icons/Arrowlft";





function Card({ title , description, rating, pictures, equipments }) { const Appears = ({item}) => {
    const [toggle, setToggle] = useState(false);
    return (

   
   

    <div className='menu'>
        
         <div className='column'>
                <div className='description'>
                    <span>Description</span>
                    <span ><ArrowUp /></span>
                </div>
                 <div className='wrapper'onClick={() => setToggle(!toggle)}>
                    <div className='span'>
                        <h1>{title}</h1>
                        {toggle ?<p>{description}</p> : ''}
                        <span>{rating}</span>
                    </div>
                
                
                
                </div>
            
               
            </div>

             <div className='column'>
                <div className='description'>
                    <span>Equipements</span>
                    <span  ><ArrowUp /></span>
                </div>
                 <div className='wrapper'>
                    <div className='span'>
                        <p>{equipments}</p>

                    </div>
                
                
                
                </div>

               
            </div>
    </div>

   
      
   

       
        )
    }

    
}
 



Card.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    equipments: PropTypes.string.isRequired,
}



Card.defaultProps = {
  title: '',
  description: '',
  rating: '',
  pictures:'',
  equipments:'',
}

 
export default Card

