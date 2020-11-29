import React, { Component } from 'react';


import classes from './App.module.css';
import Person from './Person/Person'; //lower case words are associated with HTML uppercase w JSX
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  //managed within just class, use function properties
  state = {
    persons: [
      {id:"12s", name: 'Max', age: 28},
      {id:"123s", name: 'Manu', age: 29},
      {id:"se32s", name: 'Stephanie', age: 26}
    ],
    otherState: 'wont be touched',
    showPersons: false,
    pageColor: false
  }

  //delete a person from the array
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //or const persons = this.state.persons.splice()
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    //modern approach
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // alternative - const person = Object.assign({}, this.state.person);

  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  toggleBackgroundHandler = () => {
    const doesShow = this.state.pageColor;
    this.setState({pageColor: !doesShow});
  }

  render() {
    //this is js area not jsx
    //variable to dynamically change the button color
    let btnClass= [classes.button];
    let persons = null;
//common use map to output lists in reactjs
    if (this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map((person, index) => {
            //key has to be on the outer method
            return 
              <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} 
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  key={person.id}
                  />
          })}
        
        </div>
      );
  
          //change styles dynamically
      btnClass.push(classes.Red);

    }
    if (this.state.pageColor){
      btnClass.push(classes.Purple);
    }

    //vairable for Text css to change with list len change
    let assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // classes will be red
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }



    return (
        <div 
          className={classes.App}
          //style={pageStyle}
          >
          <h1>Duncan Brown</h1>
          <p className={assignedClasses.join(' ')}>i am here to learn</p>    
          <button 
            className={btnClass.join(' ')}
            onClick={this.togglePersonsHandler}
            onDoubleClick={this.toggleBackgroundHandler} >Toggle Name
            </button>
          {persons}
        </div>
    );}
}

export default (App);
