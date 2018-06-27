import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/UserInput';
import Output from './UserOutput/UserOutput';

class App extends Component {
  state = {
    peoples: [
      {name: 'Jimmy Wongprom'},
      {name: 'Pelle'},
    ]
  }

  switchNameWithInput  = (event) => {
    this.setState({
      peoples: [
        {name: event.target.value},
        {name: 'Pelle'},
      ]
    }) 
}

  changeNameHandler = () => {
    this.setState({
      peoples: [
        {name: 'Sune Bäckström'},
        {name: 'Pelle Svanslös'},
      ]
    })
  }

  

  render() {
    const oneGirl = 'Vanessa';
    return (
      <div className="App">
        <Input 
          test = {this.switchNameWithInput}
          currentName = {this.state.peoples[0].name} />
        <Output 
          changeName = {this.changeNameHandler}
          peopleZero = {this.state.peoples[0].name}
          oneGirl = {oneGirl}
          peopleOne = {this.state.peoples[1].name} 
           />
        <Output animal = 'Cat' />
        <Output animal= "Dog" />
      </div>
    );
  }
}

export default App;
