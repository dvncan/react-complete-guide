import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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
    hasChanged: false
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
  }
  
  //delete a person from the array
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //or const persons = this.state.persons.splice()
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    this.setState({hasChanged: true});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  toggleBackgroundHandler = () => {
    const doesShow = this.state.pageColor;
    this.setState({pageColor: !doesShow});
  }

  resetPersonsHandler = () => {
    let hasChanged = this.state.hasChanged;
    const people = [
      {id:"12s", name: 'Max', age: 28},
      {id:"123s", name: 'Manu', age: 29},
      {id:"se32s", name: 'Stephanie', age: 26}
    ]
    if(hasChanged){this.setState({persons: people});}
  }
    
  

  render() {
    
    let persons = null;
    //perons, clicked & changed props
    if (this.state.showPersons){
      persons= <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons = {this.state.showPersons}
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler}
            doubleClicked={this.resetPersonsHandler}/>
          {persons}
        </div>
    );}
}

export default (App);
