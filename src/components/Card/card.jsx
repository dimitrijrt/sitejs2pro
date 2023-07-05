import PropTypes from 'prop-types'

import style from './card.scss'

import React, { useState } from 'react';

const App = () => {
  const [elementVisible, setElementVisible] = useState(false);
};



function Card({ title , description, rating, pictures, equipments }) {
    return (

       
    <div className='menu'>
         <div className='column'>
                <div className='description'>
                    <span>Description</span>
                    <span >^</span>
                </div>
                 <div className='wrapper'>
                    <div className='span'>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <span>{rating}</span>
                    </div>
                
                
                
                </div>

               
            </div>

             <div className='column'>
                <div className='description'>
                    <span>Equipements</span>
                    <span >^</span>
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



 



Card.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    équipements: PropTypes.string.isRequired
}



Card.defaultProps = {
  title: '',
  description: '',
  rating: '',
  pictures:'',
  equipments:'',
}


export default Card