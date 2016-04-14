import React from 'react';
import ReactDom from 'react-dom';
import Autocompleter from '../src/autocompleter.jsx';

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
                <h2>Autocomplete</h2>
                <Autocompleter list={originalList} />
            </div>
        );
    }
}

ReactDom.render(
    <App />, document.getElementById('content')
);
