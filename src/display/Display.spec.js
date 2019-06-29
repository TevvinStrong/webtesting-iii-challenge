// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-libary';

import 'jest-dom/extend-expect';

import Display from './Display.js';

describe('<Display />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('displays open', () => {
        const { getByText } = render(<Display closed={false} />);

        getByText(/open/i);
    });

    it('displays closed if props.closed is true', () => {
        const { getByText } = render(<Display closed={true} />);

        getByText(/closed/i);
    });

    it('displays locked if props.locked is true', () => {
        const { getByText } = render(<Display locked={true} />);

        getByText(/locked/i);
    });

    it('displays unlocked if props.locked is false', () => {
        const { getByText } = render(<Display locked={false} />);

        getByText(/unlocked/i);
    });

    it('when closed use the red-led class', () => {
        const { getByText } = render(<Display closed={true} />);

        expect(getByText(/closed/i)).toHaveClass('red-led');
    });

    it('when locked use the red-led class', () => {
        const { getByText } = render(<Display locked={true} />);

        expect(getByText(/locked/i)).toHaveClass('red-led');
    });

    it('when unlocked use the green-led class', () => {
        const { getByText } = render(<Display locked={false} />);

        expect(getByText(/unlocked/i)).toHaveClass('green-led');
    });

    it('green-led class when open', () => {
        const { getByText } = render(<Display closed={false} />);

        expect(getByText(/open/i)).toHaveClass('green-led');
    });
});
