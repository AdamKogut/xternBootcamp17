import React,{Component} from 'react'
import './Thing.css'
import ContentEditable from 'react-contenteditable'
import Actions from './Actions'

class Thing extends Component{
  componentDidMount(){
    if(this.nameInput.htmlEl.textContent){
      this.nameInput.htmlEl.focus()
    }
  }

  updateName=(ev)=>{
    const {thing,saveThing}=this.props
    thing.name=ev.target.value
    saveThing(thing)
  }

  blurOnEnter=(ev)=>{
    if(ev.key==='Enter'){
      ev.preventDefault()
      //const {addThing}=this.props
      //addThing()
      ev.target.blur()
    }
  }

  changeComplete=(ev)=>{
    const {thing,saveThing}=this.props
    thing.completed=ev.target.checked
    saveThing(thing)
  }


  render(){
    const {thing,removeThing}=this.props
    return(
        <li className="Thing">
          <input type="checkbox" defaultChecked={thing.completed} onClick={this.changeComplete}/>
          <div className="details">
            <ContentEditable 
              className="name" 
              html={thing.name} 
              onChange={this.updateName} 
              ref={input=>this.nameInput=input}
              onKeyPress={this.blurOnEnter}/>
            <Actions thing={thing} removeThing={removeThing}/>
          </div>
        </li>
    )
  }
}

export default Thing