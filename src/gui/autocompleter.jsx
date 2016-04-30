import React, { Component, PropTypes } from 'react';
import SuggestionList from './suggestionList.jsx';
import SuggestionProvider from '../suggestion-provider/suggestion-provider';

class Autocompleter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            suggestionProvider: new SuggestionProvider(this.props.list, this.props.fuzzy)
        };
    }

    static get displayName() {
        return 'Autocompleter';
    }

    static get propTypes() {
        return {
            fuzzy: PropTypes.bool,
            list: PropTypes.array,
            maxSuggestions: PropTypes.number
        };
    }

    static get defaultProps() {
        return {
            fuzzy: false,
            list: [],
            maxSuggestions: 5
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

export default Autocompleter;