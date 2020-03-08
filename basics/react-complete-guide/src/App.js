import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id: 'asd', name: "Mantas", age: 30 },
            { id: 'asddf', name: "Darius", age: 28 },
            { id: 'asdfdsf', name: "Kipras", age: 45 },
        ],
        otherState: "Dont change",
        showPersons: false
    }

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[findIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons == true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={index.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })}
                </div>
            );

            style.backgroundColor ='red';
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red']
        } 
        if (this.state.persons.length <=1) {
            classes.push('bold'); // classes = ['red', 'bold']
        }

        return (
            <div className="App">
                <h1>Hi, i am a React app</h1>
                <p className={classes.join(' ')} >This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>

        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;



// const [personsState, setPersonsState] = useState({
//     persons: [
//         { name: "Mantas", age: 30 },
//         { name: "Darius", age: 28 },
//         { name: "Kipras", age: 45 },
//     ],
// });

// const [otherState, setOtherState ] = useState('Some other value');

// console.log(personsState, otherState);

// const switchNameHandler = () => {
//     //console.log('Was clicked!')
//     // Dont do this this.state.persons[0].name = "ma";
//     setPersonsState({
//         persons: [
//             { name: "Man", age: 30 },
//             { name: "Darius", age: 28 },
//             { name: "Kipras", age: 34 }
//         ]
//     });
// }