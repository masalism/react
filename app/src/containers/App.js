import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary/Auxiliary';
import AuthContext from '../context/auth-context';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        // this.state = {
        //     persons: [
        //         { id: 'asfa1', name: 'Max', age: 28 },
        //         { id: 'vasdf1', name: 'Manu', age: 29 },
        //         { id: 'asdf11', name: 'Stephanie', age: 26 }
        //     ],
        //     otherState: 'some other value',
        //     showPersons: false
        // };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28 },
            { id: 'vasdf1', name: 'Manu', age: 29 },
            { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
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

    loginHandler = () => {
        this.setState({ authenticated: true });
    };

    render() {
        console.log('[App.js render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.state.authenticated}
                />
            );
        }

        return (
            <Aux>
                <button
                    onClick={() => { this.setState({ showCockpit: false }) }} >Remove Cockpit</button>
                <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }} >
                    {this.state.showCockpit ?
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler}
                            login={this.loginHandler}
                        /> : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default withClass(App, classes.App);

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
