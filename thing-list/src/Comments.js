import React, {Component} from 'react'
import './Comments.css'

class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            comment:'',
            comments:[],
        }
        this.updateComment=this.updateComment.bind(this)
        this.addComment=this.addComment.bind(this)
    }

    updateComment(ev){
        this.setState({
            comment:ev.target.value
        })
    }

    addComment(ev){
        const state={...this.state}
        const comment={
            text:this.state.comment,
            time:new Date()
        }
        state.comments.push(comment)
        state.comment=''
        this.setState(state)
    }

    render(){
        return (
            <div className='comments input-group'>
                <textarea className='input-group-field' value={this.state.comment} onChange={this.updateComment} placeholder="Enter comment here"></textarea>
                <button className='input-group-button' onClick={this.addComment.bind(this)}>Submit</button>
            </div>
        )
    }
    
    
}

export default Comments