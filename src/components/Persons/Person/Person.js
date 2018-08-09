import React, {Component} from 'react';
import './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component {
   
    componentDidMount (){
        console.log( "[Person.js] Inside ComponentDidMount()" );
        console.log( "position => " + this.props.position )
        if(this.props.position === 0){
            this.inputElement.focus();
        }
    }

    render() {
        return(
        <WithClass classes="Person">
            <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age}. </p>
            <p>{this.props.children}</p>
            <input 
                ref = {( inp )=>{ this.inputElement = inp }}
                type='text'
                onChange={this.props.changed}
                value={this.props.name}
            />
        </WithClass>
        )
    }
}

Person.PropTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed: PropTypes.func
}

export default Person;

