import React from 'react';
import SuggestionList from './suggestionList.jsx';

class Autocompleter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            suggestions: []
        };
    }

    updateState(event) {
        let searchString = event.target.value;
        let suggestions = this.props.list
            .filter(s => s.indexOf(searchString) >= 0);

        this.setState({
            searchString,
            suggestions
        });
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.searchString}
                    onChange={e => this.updateState(e)} />
                <SuggestionList
                    suggestions={this.state.suggestions} />
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