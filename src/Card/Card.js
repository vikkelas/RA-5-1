import React from 'react';
import './Card.css'

function Card({children, ...item}) {
    return (
        <div className='card'>
            {item.img && <img className='card__img' src={item.img} alt={item.title}/>}
            <div className="card__info">
                {children}
                <button className='card__button'>Go somewhere</button>
            </div>

        </div>
    );
}

export default Card;