import React from 'react';
import './card-list.styles.css'

//basically the parameter that the function takes 
//building components that only care about one thing like the card list
export const CardList = (props) => {
console.log(props);
return(<div className='card-list'>{props.children}</div>)
}