import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthLayout from './auth';

describe('Auth', () => {

  beforeEach(() => {
    render(<AuthLayout />);
  })

  it('Should render logos', () => {
    const appLogo = screen.getByAltText('playlist-master'); 
    const connectionLogo = screen.getByAltText('connection'); 

    expect(appLogo).toBeInTheDocument();
    expect(connectionLogo).toBeInTheDocument();
  });

  it('Should render call to action buttons', () => {    
    const loginButton = screen.getByText('Sign up');
    expect(loginButton).toBeInTheDocument();
  });
});
