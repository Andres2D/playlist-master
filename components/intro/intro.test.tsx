import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IntroLayout from './intro';

describe('Intro', () => {

  beforeEach(() => {
    render(<IntroLayout />);
  })

  it('Should render logo playlist ,aster', () => {
    const appLogo = screen.getByAltText('playlist-master'); 
    expect(appLogo).toBeInTheDocument();
  });
})