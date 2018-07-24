import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import { constants } from 'os';


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        persons: [
            {id:'sdfs1', name:'Suhas', age: 28},
            {id:'fggf1', name:'Akash', age: 30},
            {id:'dghh1', name:'Tejas', age: 32}
        ],
        otherState: 'Some Other Value..',
        showPersons : false
    }
 //   this.switchNameHandler = this.switchNameHandler.bind(this);
 //   this.togglePersonHandler = this.togglePersonHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
 
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
            this.setState({showPersons : !doesShow});
       }


    render() {   
        const style ={
            backgroundColor : 'green',
            color : 'white',
            font : 'inherit',
            border : '1px solid blue',
            padding : '8px',
            cursor: 'pointer',
          
        };

        let persons = null;

        if(this.state.showPersons){
            persons = (
            <div>
                {this.state.persons.map((person, index) => {
                       return <Person 
                       click={this.deletePersonHandler.bind(this,index)}
                       name={person.name}
                       age={person.age}
                       key={person.id}
                      // changed={this.nameChangeHandler(event, person.id)}/> 
                      changed={(event) => this.nameChangeHandler(event, person.id)}/> 
                })}
                    
                {/* <Person 
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>My Hobbies: Playing games..</Person>
                <Person
                    name={this.state.persons[1].name}   
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this,"Suhas Patil")}
                    changed={this.nameChangeHandler.bind(this)}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/> */}
            </div>
            )
            style.backgroundColor = 'red';
         
        }

        const classes = [];

        if(this.state.persons.length <= 2){
            classes.push ('red');
        }

        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }    

        return(
          
                <div className="App"> 
                    <h1>Hi, I'm in a React App</h1>
                    <p className={classes.join(' ')}>This is really working!!</p>
                    <button 
                        style={style}
                        onClick={this.togglePersonHandler.bind(this)}>Toggle Persons</button>
                        {persons}                
                </div> 
           
        );
   //     return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am in React App'));
    }
}

export default App;