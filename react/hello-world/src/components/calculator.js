import React, { Component } from 'react'
import Keypad from './keypad';
import './bmi_style.css'

export default class Calculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         result:""
      }
    }
  onClick = button =>{
    if(button==='='){
        this.calculate();
    }
    else if(button==='C'){
        this.reset();
    }
    else if(button==='CE'){
        this.calculate();
    }
    else{
        this.setState({
            result:this.state.result + button
        })
    }
  }  
  reset=()=>{
    this.setState({
        result:""
    })
  }
  backspace=()=>{
    this.setState({
        result:this.state.result.slice(0,-1)

    })
  }
  calculate=()=>{
    var checkResult=''
    checkResult=this.state.result
    this.setState({
        result:(eval(checkResult)||"")+""
    })
    
  }
  render() {
    return (
      <div>
        <h1>Simple Calculator</h1>
        <p>{this.state.result}</p>
        <Keypad onClick={this.onClick}/>
        
      </div>
    )
  }
}
