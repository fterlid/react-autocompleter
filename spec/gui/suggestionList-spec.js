import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SuggestionList from '../../src/gui/suggestionList.jsx';

describe('SuggestionList component tests', () => {
    it('renders a list of suggestions', () => {
        let suggestions = ['alfa', 'beta', 'delta', 'gamma'];
        let shallowRenderer = TestUtils.createRenderer();
        let element = React.createElement(SuggestionList, { suggestions });
        shallowRenderer.render(element);

        let result = shallowRenderer.getRenderOutput();

        expect(result.props.children.length).toBe(4);
        expect(result.props.children.every(x => x.type === 'li')).toBe(true);
    });
});