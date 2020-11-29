import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //lower case words are associated with HTML uppercase w JSX
//import Radium from 'radium';
//import {StyleRoot} from 'radium';

import styled from 'styled-components'; // package that mixes css & js very nicely we can use as a react compnonet w styles attached

const StyledButton = styled.button`
  background-color: ${props=>props.alt ? 'red' : 'green'};
  font: inherit;
  border-color: blue;
  padding: 8px;
  cursor: pointer;
  
  
  &:hover { // or any psuedo selector but have to start w a ':' this is usable from radium
    background-color: ${props=>props.alt ? 'salmon' : 'lightgreen'};
    color: black
  } 
`;

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
    const style = {

    };

    const pageStyle = {
      backgroundColor: 'orange',
      margin: '100px',
      padding: '15px',
      borderColor: 'pink'
    }

    //this is js area not jsx

    let persons = null;
//common use map to output lists in reactjs
    if (this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
          })}
        
        </div>
      );
  
  
  //    style.backgroundColor = 'red';
  //    style[':hover'] = {
  //      backgroundColor: 'salmon',
  //      color: 'black'
  //    }
    }
    if (this.state.pageColor){
      style.backgroundColor = 'purple';
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); // classes will be red
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }



    return (
        <div 
          className="App"
          style={pageStyle}
          >
          <h1>Duncan Brown</h1>
          <p className={classes.join(' ')}>i am here to learn</p>    
          <StyledButton 
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}
            onDoubleClick={this.toggleBackgroundHandler} >Toggle Name
            </StyledButton>
          {persons}
        </div>
    );}
}

export default (App);
