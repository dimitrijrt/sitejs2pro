import './collapse.scss';
import ArrowUp from "../../assets/icons/ArrowUp";
import React, {useEffect, useState} from "react";


const Collapse = ({title, description}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='collapse' >
            <div className="rectangle" onClick={() => setToggle(!toggle)}>
                <span className='titlecol'>{title}</span>
                <span  className={toggle ? 'Arrow arrow_up' : 'Arrow arrow_down'} ><ArrowUp /></span>
            </div>
            {toggle
                ? Array.isArray(description)
                    ? <ul>{description.map((item) => <li>{item}</li>)}</ul>
                    : <p className={"texte"}>{description}</p>
                : ''}

        </div>
    )
}

export default Collapse;