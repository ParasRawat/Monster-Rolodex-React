import React from 'react';
import './card.styles.css';


export const Card = (props) =>(
    // this is the return syntax 
// `` are new methodologies of the ecma script where one can use expressions in the string
        <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>

        <h2>{props.monster.name} </h2>
        <h4>{props.monster.address.city}</h4>
        <p>{props.monster.email}</p>

    </div>
)