import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return <Person 
            // click={props.clicked.bind(this,index)}
            position={index}
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            // changed={this.nameChangeHandler(event, person.id)}/> 
            changed={(event) => this.props.changed(event, person.id)}/> 
            });
        }
    }


export default Persons;