import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    //whenever we need to execute a code after state has been set
    //do not place that code outside the setstate method
    //instead place that code as an arrow function inside the set state method
    //it is passes as a second parameter to the setstate method
    increment(){
        this.setState({
            count: this.state.count+1
        })
    }
    incrementfive(){
        this.setState({
            count: this.state.count+5
        })
        
    }
    
  render() {
    return (
        <div>
             <div>
                Count - {this.state.count}
                <button onClickCapture={()=>this.incrementfive()}>Increment</button>
                <button onClickCapture={()=>this.increment()}>Increment</button>
            </div>
        </div>
     
    )
  }
}
