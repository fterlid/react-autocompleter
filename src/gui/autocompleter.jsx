import React from 'react';
import SuggestionList from './suggestionList.jsx';
import SuggestionProvider from '../suggestion-provider/suggestion-provider';

class Autocompleter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            suggestionProvider: new SuggestionProvider(this.props.list)
        };
    }

    _handleInputChange(event) {
        this.setState({
            searchString: event.target.value
        });
    }

    render() {
        let suggestions = this.state.suggestionProvider
            .createSuggestions(this.state.searchString, this.props.maxSuggestions);
        
        return (
            <div>
                <input
                    value={this.state.searchString}
                    onChange={e => this._handleInputChange(e)} />
                <SuggestionList suggestions={suggestions} />
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