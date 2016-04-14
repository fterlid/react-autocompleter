import React from 'react';
import SuggestionList from './suggestionList.jsx';

class Autocompleter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input />
                <SuggestionList
                    suggestions={this.props.list} />
            </div>
        );
    }
}

Autocompleter.propTypes = {
    list: React.PropTypes.array,
    maxSuggestions: React.PropTypes.number
};

Autocompleter.defaultProps = {
    list: [],
    maxSuggestions: 5
};

export default Autocompleter;