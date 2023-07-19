import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ArrowUp from "../../assets/icons/ArrowUp";
import style from "./card.scss";


function Card({title, description, rating, pictures, equipments}) {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='menu'>
            <div className='column'>
                <div className='description' onClick={() => setToggle(!toggle)} >
                    <span>Description</span>
                    <span className={toggle ? 'Arrow arrow_up' : 'Arrow arrow_down'}><ArrowUp/></span>
                </div>
                <div className='wrapper' >
                    <div className='span'>
                        <h1>{title}</h1>
                        {toggle ? <p>{description}</p> : ''}
                    </div>
                </div>
            </div>
            <div className='column'  >
                <div className='equipements' onClick={() => setToggle(!toggle)}>
                    <span  >Equipements</span>
                    <span className={toggle ? 'Arrow arrow_up' : 'Arrow arrow_down'}><ArrowUp/></span>
                </div>
                <div className='wrapper'>
                    <div className='span'>
                    {toggle ? <p>{equipments}</p> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

