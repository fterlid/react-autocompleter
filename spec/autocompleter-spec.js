import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Autocomparer from '../src/autocompleter';

describe('Autocomparer component tests', () => {
    it('renders an input field', () => {
        let shallowRenderer = TestUtils.createRenderer();
        let element = React.createElement(Autocomparer);
        shallowRenderer.render(element);

        let result = shallowRenderer.getRenderOutput();

        expect(result.props.children.type).toBe('input');
    });
});