// Test away
import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});