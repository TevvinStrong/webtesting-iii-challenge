// Test away!
import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display.js';

describe('<Display />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
