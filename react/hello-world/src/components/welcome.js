import React,{Component} from "react";
//whenever we are creating a class component, we need two imports, react and a component class from react
class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} </h1>
    }}
    export default Welcome
