import React from 'react';
import './search-box.styles.css';

// a functional component is just a component that gets some props and return some jsx
//destructuring and passing
export const SearchBox = (props) =>{
  // or we could simply do javascript destructuring ({placeholder, handleChange})
    const placeholder= props.placeholder;
    const handleChange =props.handleChange;

return(
    <input type='search' 
    className ='search'
    placeholder={placeholder}// keeping it dynamic 
    // on change performs the handleChange functionality
    onChange={handleChange} />
)
}