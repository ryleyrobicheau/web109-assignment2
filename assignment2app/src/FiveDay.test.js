import { render, screen } from '@testing-library/react';
import FiveDay from './FiveDay';

test('renders five day weather', () => {
    render(<FiveDay />);
    const linkElement = screen.getByText(/five day/i);
    expect(linkElement).toBeInTheDocument();
  }
  );