import React from 'react';
import styled from 'styled-components';
//import Person from './Person.css';


const StyledDiv = styled.div`
    width: 60%;
    margin: 24px auto;
    border: 1 solid #eee;
    box-shadow: 0 8px 3px #ccc;
    padding: 16px;
    text-align: center;
    


    media query is a way to have logic in css if conditions are met : if window width 500px then person width is 450px
    @media (min-width: 500px) {
        .Person{
            width: 450px;
        }
`; 

const person = (props) => {
    /*const style = {
        '@media (min-width: t00px)':{
            width: '450px'
        }
    };*/
    return (
       // <div className ="Person" style={style}>
    <StyledDiv>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
    );
};

export default person;