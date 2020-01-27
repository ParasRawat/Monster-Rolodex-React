import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();
    this.state={
     monsters: [

     ]
    }
  }
  

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
   .then(users => this.setState({monsters: users}));
}


  render(){
    return (
      <div className="App">
        <CardList name="Paras"> 
          {
        this.state.monsters.map(monster=>
        <h2 key={monster.id}> This monster is {monster.name} {monster.username} </h2>)
        }
        </CardList>
        
        
      </div>
    );
  }
}

export default App;
