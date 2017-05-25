import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThings from './AddThings'
import base from './base'
import SignOut from './SignOut'
import SignIn from './SignIn'

class App extends Component {
  state = {
    things: {},
    uid:null,
  }

  componentWillMount(){
    base.syncState(
      'things',
      {
        context:this,
        state:'things',
      }
    )
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

  authHandler=(authData)=>{
    this.setState({uid:authData.user.uid})
  }

  addThing=()=>{
    const things = {...this.state.things}
    const thing={
      id: `thing-${Date.now()}`,
      name: '',
      completed:false,
      dueOn:'',
    }
    things[thing.id]=thing
    this.setState({things})
  }

  SignedIn=()=>{
    return this.state.uid
  }

  renderMain=()=>{
    const actions={
      saveThing:this.saveThing,
      removeThing:this.removeThing,
      addThing:this.addThing,
    }
    return (
      <div>
        <SignOut />
        <AddThings addThing={this.addThing}/>
        <ThingList things={this.state.things} {...actions}/>
      </div>
    )
  }

  render() { 
    return (
      <div className="App">
        <Header />
        {this.SignedIn() ? this.renderMain():<SignIn authHandler={this.authHandler}/>}
      </div>
    );
  }
}

export default App;