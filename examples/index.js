import React from 'react';
import ReactDom from 'react-dom';
import Autocompleter from '../src/gui/autocompleter.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let originalList =[
            'Alaska',
            'American Samoa',
            'Alabama',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District Of Columbia',
            'Federated States Of Micronesia',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Marshall Islands',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Northern Mariana Islands',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Palau',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virgin Islands',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];

        return (
            <div>
                <h1>Here be examples</h1>

                <h2>Non-fuzzy</h2>
                <Autocompleter list={originalList} />

                <h2>Fuzzy</h2>
                <Autocompleter
                    list={originalList}
                    maxSuggestions={4}
                    fuzzy />

                <h2>Original list</h2>
                <ul>
                    {originalList.map((x,i) => <li key={i}>{x}</li>)}
                </ul>
            </div>
        );
    }
}

ReactDom.render(
    <App />, document.getElementById('content')
);
