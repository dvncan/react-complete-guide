import React, {useState} from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'; //lower case words are associated with HTML uppercase w JSX

const app = props =>{
    
    const [ personsState, setPersonsState ] = useState({
        persons: [
          {name: 'Max', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 26}
        ],
        otherState: 'wont be touched'
    });
  
    const [otherState, setOtherState] = useState({otherState: 'some other value'})
  
    console.log(personsState, otherState);
  
    const switchNameHandler = () => {
      // console.log('was clicked!');
      // dont do this --> this.state.persons[0].name = 'Maximilian'
      setPersonsState({
        persons:[
          {name: 'Maximilian', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 27}
        ]
      }  )
    }
  
    
    return (
        //this compiles to one line code below.
        <div className="App">
          <h1>Duncan Brown</h1>
          <h2>i am here to learn</h2>
          <button onClick={this.switchNameHandler} >Switch Name</button>
          <Person 
            name={personsState.persons[0].name} 
            age={personsState.persons[0].age}/>
          <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}
            click = {this.switchNameHandler}>My Hobbies: Racings </Person>
          <Person 
            name={personsState.persons[2].name} 
              age={personsState.persons[2].age} />
        </div>
        //return React.createElement('div', {className: 'App', React.createElement('h1', null ,'Does this work now?'));
      )}
  
  export default app;
  