import React from 'react';

class SuggestionList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.suggestions.map((x,i) => <li key={i}>{x}</li>)}
            </ul>
        );
    }
}

SuggestionList.propTypes = {
    suggestions: React.PropTypes.array
};

SuggestionList.defaultProps = {
    suggestions: []
};

export default SuggestionList;