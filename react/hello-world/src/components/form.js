import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'angular'
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    commentChangeHandler=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    selecthandler=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    submitHandler=(event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    }
    
  render() {

    return (
      <form onSubmit={this.submitHandler}>
        <div>
            <label>UserName</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.commentChangeHandler}></textarea>
        </div>
        <div>
            <select value={this.state.topic} onChange={this.selecthandler}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
        </div>
        <button >Submit</button>
      </form>
    )
  }
}
