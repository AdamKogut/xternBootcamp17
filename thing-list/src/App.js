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

  removeThing=(thing)=>{
    const things={...this.state.things}
    delete things[thing.id]
    this.setState({things})
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
    const actions={
      saveThing:this.saveThing,
      removeThing:this.removeThing,
      addThing:this.addThing,
    }
    return (
      <div className="App">
        <Header />
        <AddThings addThing={this.addThing}/>
        <ThingList things={this.state.things} {...actions}/>

        
      </div>
    );
  }
}

export default App;