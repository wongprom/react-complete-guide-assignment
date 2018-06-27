import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/UserInput';
import Output from './UserOutput/UserOutput';

class App extends Component {
  state = {
    peoples: [
      {name: 'Jimmy'},
      {name: 'Peter'},
    ]
  }

  render() {
    const oneGirl = 'Vanessa';
    return (
      <div className="App">
        <Input />
        <Output 
          peopleZero = {this.state.peoples[0].name}
          oneGirl = {oneGirl}
          peopleOne = {this.state.peoples[1].name} />
        <Output 
          //oneGirl = {oneGirl} 
          />
        <Output 
          //peopleOne = {this.state.peoples[1].name}
          />
      </div>
    );
  }
}

export default App;
