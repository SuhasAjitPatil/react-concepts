import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Auxilary';

const Cockpit = (props) => {
    const assignedClasses = [];

    if(props.persons.length <= 2){
        assignedClasses.push ("red");
    }

    if(props.persons.length <= 1) {
        assignedClasses.push("bold");
    }    

    const style ={
        backgroundColor : 'green',
        color : 'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor: 'pointer'
      
    };

    if(props.showPersons){
        style.backgroundColor = 'red';
    }

    return(
       
    <Aux>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!</p>
        <button 
            style={style}
            onClick={props.clicked}>Toggle Persons</button>
    </Aux>
    
    )

}


export default Cockpit;