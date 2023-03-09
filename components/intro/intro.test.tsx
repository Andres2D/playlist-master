import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IntroLayout from './intro';

describe('Intro', () => {

  beforeEach(() => {
    render(<IntroLayout />);
  })

  it('Should render logos', () => {
    const appLogo = screen.getByAltText('playlist-master'); 
    const spotifyLogo = screen.getByAltText('playlist-master'); 

    expect(appLogo).toBeInTheDocument();
    expect(spotifyLogo).toBeInTheDocument();
  });

  it('Should render call to action buttons', () => {    
    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });
})