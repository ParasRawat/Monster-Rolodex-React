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

  // the state has its varios properties, we can alter those properties based on the result from api's
  
  // i was hoping to get a good playing ground 

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
   .then(users => this.setState({monsters: users}));
}

//pass the newly updated states as a property to our component 

  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/> 
      </div>
    );
  }
}

export default App;
