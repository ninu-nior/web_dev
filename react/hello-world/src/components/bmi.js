import React, { Component } from 'react'
import './bmi_style.css'
export default class BMI extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        weight:0.0,
        inch:0.0,
        feet:0.0,
        bmivalue:null
         
      }
    }
    weighthandler=(event)=>{
        this.setState({
            weight:event.target.value
        })
    }
    FeetHandler=(event)=>{
        this.setState({
            feet:event.target.value
        })
    }
    InchHandler=(event)=>{
        this.setState({
            inch:event.target.value
        })
    }
    calculatebmi=(event)=>{
        event.preventDefault();
        const weight = parseFloat(this.state.weight);
        const feet = parseFloat(this.state.feet);
        const inch = parseFloat(this.state.inch);

        // Convert height from feet and inches to meters
        const heightMeters = ((feet * 12) + inch) * 0.0254;

        // Calculate BMI using the formula
        const bmi = weight / (heightMeters * heightMeters);

        this.setState({
            bmivalue:bmi
        })

    }
  render() {
    return (
      <div className='main'>
        <h1 className='heading'>BMI Calculator</h1>
        <div className='bmiform'>
            <form className='formclass' onSubmit={this.calculatebmi}>
            <text>Weight</text>
            <br/>
                <div className='formItem'>
                    
                    
                    <label>(In kg)</label>
                    <input type='text' value={this.state.weight} onChange={this.weighthandler}></input>
                </div>
                <br/>
                <text>Height</text>
                <div className='formItem'>
                    <label>(Feet)</label>
                    <input type='text' value={this.state.feet} onChange={this.FeetHandler}></input>
                </div>
                <div className='formItem'>
                    <label>(Inches)</label>
                    <input type='text' value={this.state.inch} onChange={this.InchHandler}></input>
                </div>
                <br></br>
                <button>Calculate</button>

            </form>
        </div>
        <br></br>
        <br></br>
        {this.state.bmivalue && <p>Your BMI is: {this.state.bmivalue}</p>}
      </div>
    )
  }
}
