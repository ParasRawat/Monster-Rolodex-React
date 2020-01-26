import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
     monsters: [

     ]
    }
  }
  
//Understanding life cycle methodes 
//this methode is called whenever the page gets renered for the first time 
// synonym to the oncreate life cycle methode that we used in android 
componentDidMount(){

  //javascript native api call
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
   .then(users => this.setState({monsters: users}));

}
  render(){
    return (
      <div className="App">
        {
        
        this.state.monsters.map(monster=>
        <h1 key={monster.id}> This monster is {monster.name} {monster.username} </h1>)
        }
        
      </div>
    );
  }
}

export default App;
