import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthLayout from './auth';

describe('Auth', () => {
  it('Should render logos', () => {
    render(<AuthLayout />);

    const appLogo = screen.getByAltText('playlist-master'); 
    const spotifyLogo = screen.getByAltText('playlist-master'); 

    expect(appLogo).toBeInTheDocument();
    expect(spotifyLogo).toBeInTheDocument();
  });

  it('Should render call to action buttons', () => {
    render(<AuthLayout />);

    const facebookButton = screen.getByText('Facebook');
    const googleButton = screen.getByText('Google');

    expect(facebookButton).toBeInTheDocument();
    expect(googleButton).toBeInTheDocument();
  });
})