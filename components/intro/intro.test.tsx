import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IntroLayout from './intro';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));


describe('Intro', () => {

  beforeEach(() => {
    render(<IntroLayout />);
  })

  it('Should render logo playlist ,aster', () => {
    const appLogo = screen.getByAltText('playlist-master'); 
    expect(appLogo).toBeInTheDocument();
  });
});
