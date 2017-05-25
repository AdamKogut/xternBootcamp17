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

  handleChange=(ev)=>{
    const {thing,saveThing}=this.props
    const field=ev.currentTarget.getAttribute('name')
    thing[field]=ev.target.value
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

  render(){
    const {thing,removeThing}=this.props
    return(
        <li className="Thing">
          <input type="checkbox" defaultChecked={thing.completed} name="completed" value={thing.completed} onClick={this.handleChange}/>
          <div className="details">
            <ContentEditable 
              className="name" 
              name="name"
              html={thing.name} 
              onChange={this.handleChange} 
              ref={input=>this.nameInput=input}
              onKeyPress={this.blurOnEnter}/>

            <input type="date"
              onChange={this.handleChange}
              defaultValue={thing.dueOn}
              name="dueOn"
              />
            <Actions thing={thing} removeThing={removeThing}/>
          </div>
        </li>
    )
  }
}

export default Thing