import React from "react";
// function Greet(){
//     return <h1>Hello Vishwas</h1>

// }
//Named Export
// if we use namedo export, we have to import it with the same name only
//however in this type of export, while importing we have to do it in curly braces {Greet}
export const Greet =(props) => {
    return (
<div>
<h1>Hello {props.name}</h1>
{props.children}
</div>)
}
//if nothing is passes then it simply renders nothing props.children
// we use arrow function for shorter syntax of definition of function
//export default Greet;// default export allows us to import the component as any name in app.js
//we can name it anything other than props but it is always used so reccommended
//you can return only one html component at a time so wrap all the components in a parent div or simply <> </>
// when the arrow function has more than one line of code, we wrap it within curly braces

//props are immutable i.e we cannot do props.name="lala", its values cannot be changed
