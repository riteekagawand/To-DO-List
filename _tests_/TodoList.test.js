import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TopicsList, { getTopics } from '../components/TodoList';

jest.mock('../components/RemoveBtn', () => () => <div data-testid="mock-remove-btn"></div>);
jest.mock('next/link', () => ({ children }) => children);

describe('TopicsList component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    render(<TopicsList />);
    expect(screen.getByText('All Items')).toBeInTheDocument();
  });
});