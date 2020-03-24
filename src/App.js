import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './UserOutput/UserOutput.css'
class App extends Component {
    state = {
        usernames: ['Not Max', 'Max']
    }
    changeNamehandler = (event) => {
        this.setState({
            usernames: [event.target.value, 'Max']
        })
    }
    render() {
        const style = {
            backgroundColor: 'black',
            margin: '0px 0px 10px',
            color: 'white',
            width: '100%',
            padding: '5px',
            textAlign: 'center'
        };
        return (
            <div className="better">
                <h1 style={style}>First assignment</h1>
                <UserInput changed={this.changeNamehandler} username={this.state.usernames[0]} />
                <UserOutput username={this.state.usernames[0]} />
                <UserOutput username={this.state.usernames[1]} />
            </div>
        )
    }
}

export default App;
