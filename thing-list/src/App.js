import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import ThingList from './ThingList'

class App extends Component {
  state={
    things:{
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ThingList things={this.state.things}/>
      </div>
    );
  }
}

export default App;
