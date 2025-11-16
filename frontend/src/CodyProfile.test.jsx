import CodyProfile from "./CodyProfile";
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Cody Profile Card', () => {
  it('renders in the DOM', () => {
    render(<CodyProfile/>);
    expect(screen.getByTestId('cody-chinothai')).toBeInTheDocument();
  });

  it('renders the contact card description', () => {
    render(<CodyProfile />);
    expect(screen.getByText('This is my contact card')).toBeInTheDocument();
  });

  it('renders LinkedIn link with correct href', () => {
    render(<CodyProfile />);
    const linkedInLink = screen.getByTitle('My LinkedIn');
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/cody-chinothai/');
  });
});