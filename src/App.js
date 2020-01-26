import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
     monsters: [
       {
         name: 'FRANKESTIEN',
         id: 'asc1'
       },
       {
        name: 'DRACULA',
        id: 'asc2'
      },
      {
        name: 'ZOMBIE',
        id: 'asc3'
      }
     ]
    }
  }
  //Anything in the {} means that is a expression. Although it may look like a normal html but it is not that, it is JSX ...jsx attributes
  //As the state changes we re render the components
  render(){
    return (
      <div className="App">
        {
          //RENDER AREA
          //calls the function in the map every time for each element
          //function monster(){
          // return <h1> hello </h1>
          //}
        this.state.monsters.map(monster=>
        <h1 key={monster.id}> This monster is {monster.name} </h1>)
        }
        
      </div>
    );
  }
}

export default App;
