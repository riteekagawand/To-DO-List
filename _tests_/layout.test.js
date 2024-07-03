import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom for custom matchers
import RootLayout from '../app/layout';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

describe('RootLayout Component', () => {
  it('renders without crashing', () => {
    render(<RootLayout />);
  });

  it('renders child components', () => {
    const { getByTestId } = render(
      <RootLayout>
        <div data-testid="test-child">Test Child</div>
      </RootLayout>
    );

    expect(getByTestId('test-child')).toBeInTheDocument();
    expect(getByTestId('header-component')).toBeInTheDocument(); // Assuming Header component has a test id
    expect(getByTestId('navbar-component')).toBeInTheDocument(); // Assuming Navbar component has a test id
  });
  it('applies correct styles and classes to body element', () => {
    const { container } = render(<RootLayout />);
    const bodyElement = container.querySelector('body');

    expect(bodyElement).toHaveClass('bg-green-100');
    expect(bodyElement).toHaveStyle('backgroundColor: #BCE3C5');
  });
 // Add more specific tests as needed for props handling, integration with child components, etc.
});
