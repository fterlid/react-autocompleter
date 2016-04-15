import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Autocomparer from '../src/autocompleter.jsx';

describe('Autocomparer component tests', () => {
    it('renders an input field', () => {
        let shallowRenderer = TestUtils.createRenderer();
        let element = React.createElement(Autocomparer);
        shallowRenderer.render(element);

        let result = shallowRenderer.getRenderOutput();

        expect(result.props.children[0].type).toBe('input');
    });

    xit('renders suggestion list', () => {
        let originalList = ['a', 'b', 'c'];
        let shallowRenderer = TestUtils.createRenderer();
        let element = React.createElement(Autocomparer, { list: originalList });
        shallowRenderer.render(element);

        let result = shallowRenderer.getRenderOutput();

        expect(result.props.children[1].props.suggestions).toBe(originalList);
    });
});