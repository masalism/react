import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;

class App extends Component {
    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28 },
            { id: 'vasdf1', name: 'Manu', age: 29 },
            { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    deletePersonHandler = personIndex => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={event => this.nameChangedHandler(event, person.id)}
                            />
                        );
                    })}
                </div>
            );

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //   backgroundColor: 'salmon',
            //   color: 'black'
            // };
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = ['red', 'bold']
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </StyledButton>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;

// switchNameHandler = (newName) => {
//     // console.log('Was clicked')
//     this.setState({
//         persons: [
//             { name: newName, age: 30 },
//             { name: 'Darius', age: 28 },
//             { name: 'Karolis', age: 33 },
//         ]
//     });
// }

// RADIUM //

// const [personsState, setPersonsState] = useState({
//     persons: [
//         { name: "Mantas", age: 30 },
//         { name: "Darius", age: 28 },
//         { name: "Kipras", age: 45 },
//     ],
// });
// const style = {
//     backgroundColor: 'green',
//     color: 'white',
//     font: 'inherit',
//     border: '1px solid blue',
//     padding: '8px',
//     cursor: 'pointer',

// const [otherState, setOtherState ] = useState('Some other value');
//     ':hover': {
//         backgroundColor: 'lightgreen',
//         color: 'black'
//     }

// console.log(personsState, otherState);
// style[':hover'] = {
//     backgroundColor: 'salmon',
//     color: 'black'
// }
// };
// export default Radium(App);

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
// Styled-Components//

// import styled from 'styled-components';


// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;

//     &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black;
//     }
// `;

// <StyledButton
// alt={this.state.showPersons}
// onClick={this.togglePersonsHandler} >Toggle Persons
// </StyledButton>
