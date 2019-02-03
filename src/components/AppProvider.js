import React, { Component } from 'react';
import AppContext from '../context/AppContext';


class AppProvider extends Component {
    state = {
        title: 'Despacito',
        artist: 'Luis Fonsi',
        released: '2017'
    }
    handleClick = () => {
        this.setState({
            title: 'Despacito',
            artist: 'Luis Fonsi',
            released: '2017'
        });
    }
    handleChange = (e) => {
        this.setState({ artist: e.target.value });
    }
    render() {
        return (
            <AppContext.Provider value={{ state: this.state, handleClick: this.handleClick, handleChange: this.handleChange }}>
                <h3>App Provider</h3>
                {this.props.children}
                <h2>Change State</h2>
                <input type="text" value={this.state.artist} onChange={this.handleChange} />
                <button onClick={() => {
                    this.setState({
                        title: '',
                        artist: 'Luis Fonsi',
                        released: '2017'
                    })
                }}></button>
            </AppContext.Provider>
        )
    }
}

export default AppProvider;
