import React from 'react';
import AppContext from '../context/AppContext';
import {Link} from 'react-router-dom';

export default () => {
    return <div>
        <AppContext.Consumer>
            {(context) => (
                <div>
                    <h3>SONG COmponent</h3>
                    <p>{JSON.stringify(context.state, null, 2)}</p>
                    <button onClick={context.handleClick}>Change</button>
                    <input type="text" value={context.state.artist} onChange={context.handleChange} />
                    <br />
                    <h3>GO TO MAIN </h3>
                    <Link to="/">Main</Link>
                </div>

            )}
        </AppContext.Consumer>

    </div>
}