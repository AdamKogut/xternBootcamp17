import React, {Component} from 'react'
import './AddThings.css';
import Comments from './Comments.js'

class AddThings extends Component{
    constructor(props){
      super(props)
      this.state={
        showCommentBox:false
      }
      this.toggleCommentBox=this.toggleCommentBox.bind(this)
    }

    toggleCommentBox(ev){
      ev.preventDefault()
      this.setState({
        showCommentBox: !this.state.showCommentBox
      })
    }

    render(){
        return(
            <div>
                <button className="add-thing" onClick={this.toggleCommentBox}>Add Thing</button>
                {this.state.showCommentBox ? <Comments />:null}
            </div>
        )
    }
}

export default AddThings