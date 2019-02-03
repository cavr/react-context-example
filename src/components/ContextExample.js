import React, { Component } from 'react';
import Playlist from './Playlist';
import AppProvider from './AppProvider';


class App extends Component {
    render() {
        return (
            <AppProvider>
                <Playlist />
            </AppProvider>
        )
    }
}

export default App;

