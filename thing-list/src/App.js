import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThings from './AddThings'
import base from './base'

class App extends Component {
  componentWillMount(){
    base.syncState(
      'things',
      {
        context:this,
        state:'things',
      }
    )
  }

  state = {
    things: {
      
    }
  }

  removeThing=(thing)=>{
    const things={...this.state.things}
    things[thing.id]=null
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
      completed:false,
    }
    things[thing.id]=thing
    this.setState({things})
  }

  completed=(thing)=>{
    const things={...this.state.things}
    things[thing.id].completed=!things[thing.id].completed
    this.setState({things})
  }

  render() {
    const actions={
      saveThing:this.saveThing,
      removeThing:this.removeThing,
      addThing:this.addThing,
      completed:this.completed,
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