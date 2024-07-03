import React from 'react';
import { render } from '@testing-library/react';
import Home from '../app/page';
import TopicsList from '../components/TodoList'; 
import '@testing-library/jest-dom/extend-expect';


jest.mock('../components/TodoList', () => {
    return jest.fn(() => <div data-testid="mocked-topics-list">Mocked TopicsList</div>);
  });
  

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });
  it('renders TopicsList component', () => {
    const { getByTestId, debug } = render(<Home />);
    debug(); // Use debug to see the rendered DOM structure in the console
    expect(getByTestId('mocked-topics-list')).toBeInTheDocument();
  });
  
});
