import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {

  // first test 20.2.4
  it('renders', () => {
    render(<About />);
  });

  // second test
it('matches snapshot DOM mode structure', () => {
  // render About
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
})
})

