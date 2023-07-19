import './collapse.scss';
import ArrowUp from "../../assets/icons/ArrowUp";
import {useEffect, useState} from "react";


const Collapse = ({item}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='collapse' >
            <div className="rectangle" onClick={() => setToggle(!toggle)}>
                <span className='titlecol'>{item.title}</span>
                <span  className={toggle ? 'Arrow arrow_up' : 'Arrow arrow_down'} ><ArrowUp /></span>
            </div>
            {toggle ? <p className='texte'>{item.description}</p> : ''}
            
        </div>
    )
}

export default Collapse;