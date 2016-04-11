'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import Autocompleter from '../src/autocompleter';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Here be examples</h1>
                <Autocompleter />
            </div>
        );
    }
}

ReactDom.render(
    <App />, document.getElementById('content')
);
