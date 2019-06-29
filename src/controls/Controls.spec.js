// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';

import 'jest-dom/extend-expect';

import Controls from './Controls.js';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    // it('the lock toggle button is disabled if the gate is open', () => {
    //     const { getByText } = render(<Controls closed={false} />)

    //     expect(getByText(/lock gate/i)).toBeDisabled();
    // })

    // it('the close toggle button is disabled if the gate is locked', () => {
    //     const { getByText } = render(<Controls locked={true} />)

    //     expect(getByText(/close gate/i)).toBeDisabled();
    // })

    it('button text reflects state if clicked', () => {
        const { getByText } = render(<Controls />)

        const toggleClose = getByText(/close gate/i);
        fireEvent.click(toggleClose);

        expect(getByText(/close gate/i)).toHaveTextContent('Open Gate');

    })

});

