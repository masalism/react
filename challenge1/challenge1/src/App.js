import React, { Component } from 'react';

import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOuput';

class App extends Component {

    state = {
        username: 'superMantas'
    }

    usernameChangedHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <UserInput 
                    currentName={this.state.username}
                    changed={this.usernameChangedHandler} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Mantas" />
            </div>
        );
    };
};

export default App;

