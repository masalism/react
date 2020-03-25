import React, { Component } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
                <p key="i1"
                    onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2" >
                    {this.props.children}
                </p>
                <input
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
            // <div className="Person" style={style}>
        );
    }

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    onChange: PropTypes.func
};

export default withClass(Person, classes.Person);

    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }