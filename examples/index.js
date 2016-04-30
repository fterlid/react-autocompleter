import React from 'react';
import ReactDom from 'react-dom';
import Autocompleter from '../src/gui/autocompleter.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let originalList = ['alfa', 'beta', 'delta', 'gamma'];

        return (
            <div>
                <h1>Here be examples</h1>
                <h2>Original list</h2>
                <ul>
                    {originalList.map((x,i) => <li key={i}>{x}</li>)}
                </ul>

                <h3>Non-fuzzy</h3>
                <Autocompleter list={originalList} />

                <h3>Fuzzy</h3>
                <Autocompleter
                    list={originalList}
                    maxSuggestions={4}
                    fuzzy />
            </div>
        );
    }
}

ReactDom.render(
    <App />, document.getElementById('content')
);
