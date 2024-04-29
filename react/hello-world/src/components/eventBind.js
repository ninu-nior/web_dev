import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor() {
      super()
    
      this.state = {
         message:"hello"
      }
    }
    clickhandler2(){
        this.setState({
            message:'hello ninu'
        })

    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.clickhandler2()}>Cleick bind</button>
      </div>
    )
  }
}
