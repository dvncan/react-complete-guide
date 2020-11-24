import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //lower case words are associated with HTML uppercase w JSX

class App extends Component {
  //managed within just class, use function properties
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'wont be touched',
    showPersons: false
  }

  //delete a person from the array
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:  "Max", age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })
  }


  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'light brown',
      font: 'inherit',
      borderColor: 'blue',
      padding: '8px',
      cursor: 'pointer'
    };

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
                  age={person.age} />
          })}
        
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Duncan Brown</h1>
        <h2>i am here to learn</h2>    
        <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { persons }
      </div>
    );}
}

export default App;
