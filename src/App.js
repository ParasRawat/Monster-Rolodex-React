import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();
    //state itself is a javascript object with many properties 
    this.state={
     monsters: [],
     searchField: ''
    };
  }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
   .then(users => this.setState({monsters: users}));
   
}

//component recieves the state as a prop.. 


  render(){
    const { monsters, searchField} = this.state; // javascript syntax for the destructuring of a object
    //above line of code is equivalent to const monsters= this.state.monsters && const searchfield = this.state.searchfield
    const filteredmonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )


    return (
      //asynchrnous is an event that takes an unknown amount of time and thus the system does not wait for it to finish and calls the next functions
      <div className="App">
        <input type='search'  placeholder='search monsters' onChange={e => this.setState({searchField: e.target.value})
      }/>
        <CardList monsters={filteredmonsters}/> 
      </div>
    );
  }
}

export default App;
