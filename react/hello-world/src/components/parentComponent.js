import React, { Component } from 'react'
import ChildComponent from './childComponent'
// import ChildComponent from './components/childComponent';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
    }
    greetParent(){
        alert("hello"+this.state.parentName)
    }
    
  render() {
    return (
      <div>
         <ChildComponent greenhandler={()=>this.greetParent()}/>
        
      </div>
    )
  }
}
