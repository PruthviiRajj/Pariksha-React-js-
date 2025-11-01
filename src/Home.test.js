import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renders home component', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  // Basic test to check if the component renders
  expect(document.querySelector('.container')).toBeInTheDocument();
});