import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThings from './AddThings'

class App extends Component {
  state = {
    things: {
      
    }
  }

  saveThing=(thing)=>{
    const things={...this.state.things}
    things[thing.id]=thing
    this.setState({things})
  }

  addThing=()=>{
    const things = {...this.state.things}
    const thing={
      id: `thing-${Date.now()}`,
      name: '',
    }
    things[thing.id]=thing
    this.setState({things})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddThings addThing={this.addThing}/>
        <ThingList saveThing={this.saveThing} things={this.state.things} />

        
      </div>
    );
  }
}

export default App;