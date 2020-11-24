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

  switchNameHandler = (newName) => {    
    // dont do this --> this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons:[
        {name:  newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    }  )
  }
  //only way to change the DOM is to change the state or props then react looks for new changes to the dom
  //only updates the changes across the dom


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

    if (this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
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
      //return React.createElement('div', {className: 'App', React.createElement('h1', null ,'Does this work now?'));
    );}
}

export default App;


/*          <Person   -- replaced by maping array to a jsx element
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}>My Hobbies: Racings </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} /> */