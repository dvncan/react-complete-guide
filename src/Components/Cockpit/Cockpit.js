import React from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) =>{
    //vairable for Text css to change with list len change
    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons){
        buttonClass = classes.Red;
    }
    if(props.persons.length <= 2){
          assignedClasses.push(classes.red); // classes will be red
        }
    if(props.persons.length <=1){
          assignedClasses.push(classes.bold);
        }
    return(
        <div className={classes.Cockpit}>
            <h1>Duncan Brown</h1>
            <p className={assignedClasses.join(' ')}>i am here to learn</p>    
            <button 
                className={buttonClass}
                onClick={props.clicked}
                onDoubleClick={props.doubleClicked} >Toggle Name
            </button>
        </div>
    );
};

export default Cockpit