import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import { constants } from 'os';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        persons: [
            {id:'sdfs1', name:'Suhas', age: '28'},
            {id:'fggf1', name:'Akash', age: 30},
            {id:'dghh1', name:'Tejas', age: 32}
        ],
        otherState: 'Some Other Value..',
        showPersons : false,
        toggleClicked: 0
    }
 //   this.switchNameHandler = this.switchNameHandler.bind(this);
    this.togglePersonHandler = this.togglePersonHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.deletePersonHandler = this.deletePersonHandler.bind(this); 
}

 

    nameChangeHandler (event , id) {
        //   console.log('Was clicked!');
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });    

        const person = {...this.state.persons[personIndex]};
        //const person = Object.assign({}, this.state.persona[personIndex]) ;
        
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState( {
            persons: persons
            //    persons: [
            //        {name: 'Suhas', age: 28},
            //        {name:event.target.value, age: 30},
            //        {name:'Tejas', age: 34},
            //     ]
           });
       }

       deletePersonHandler(personIndex){
            //const persons = this.state.persons.slice();
            const persons = [...this.state.persons];
            persons.splice(personIndex, 1);
            this.setState({persons: persons});
       }

       togglePersonHandler(){
            const doesShow = this.state.showPersons;
            this.setState( ( prevState, props ) =>{
                return{
                    showPersons : !doesShow,
                    toggleClicked: prevState.toggleClicked +1
                }
            } );
       }


    render() {   
     
        let persons = null;

        if(this.state.showPersons){
            persons = (        
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                /> 
            )
        }

     
        return(
          
                <WithClass classes={"App"}>             
                <Cockpit 
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                />       
                    {persons}                
                </WithClass> 
           
        );
   //     return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am in React App'));
    }
}

export default App;