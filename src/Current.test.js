import { render, screen } from '@testing-library/react';
import Current from './Current';

test('renders current weather', () => {
    render(<Current />);
    const linkElement = screen.getByText(/current weather/i);
    expect(linkElement).toBeInTheDocument();
  }
  );