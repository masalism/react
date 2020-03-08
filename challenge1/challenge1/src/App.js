import React, { Component } from 'react';
import './App.css';

import UserOutput from './components/UserOuput';
import UserInput from './components/UserInput';


class App extends Component {

    state = {
        username: 'Mantelis'
    }

    usernameChangedHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <UserInput 
                changed={this.usernameChangedHandler}
                currentName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Mantas" />
            </div>
        )
    }
}

export default App;

// state = {
//         users: [
//             { username: 'Mantas' },
//             { username: 'Darius' }
//         ]
//     }

//     changeName = (newName) => {
//         this.setState({
//             users: [
//                 { userName: newName },
//                 { userName: newName },
//             ]
//         });
//     }

//     changeNameHandler = (event) => {
//         this.setState({
//             users: [
//                 { username: event.target.value },
//                 { username: event.target.value }
//             ]
//         });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <UserOutput
//                     username={this.state.users[0].username}
//                 />
//                 <UserInput
//                     changed={this.changeNameHandler}
//                 />
//                 <UserOutput
//                     username={this.state.users[1].username}
//                 />
//                 <UserInput
//                     changed={this.changeNameHandler}
//                 />
//             </div>

//         );
//     }