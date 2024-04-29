import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import ChildComponent from './components/childComponent';
import Stylesheet from './components/stylesheet';
import Form from './components/form';
import BMI from './components/bmi';
import Calculator from './components/calculator';
import Todo from './components/todo';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <Todo/>
      {/* <BMI/> */}
     {/* <Greet name="Juhi">
     <p>This is the children prop,i.e. inner html of the greet component</p>
     </Greet>
     <br/>
     <Welcome name="Aadi"/>
     <br/>
     <Message/>
     <br/>
     <Counter/>
     <br/>
     <FunctionClick/>
     <br/>
     <EventBind/>
     <br/>
     <ParentComponent/>
     <Stylesheet/>
     <Form/> */}
     
    </div>
      
  );
}

export default App;
