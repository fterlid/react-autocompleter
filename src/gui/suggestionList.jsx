import React, { Component, PropTypes } from 'react';

class SuggestionList extends Component {
    constructor(props) {
        super(props);
    }

    static get displayName() {
        return 'Suggestion list';
    }

    static get propTypes() {
        return {
            suggestions: PropTypes.array
        };
    }

    static get defaultProps() {
        return {
            suggestions: []
        };
    }

    render() {
        return (
            <ul>
                {this.props.suggestions.map((x,i) => <li key={i}>{x}</li>)}
            </ul>
        );
    }
}

export default SuggestionList;