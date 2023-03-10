import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuLayout from './menu';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const actions = ['Play'];

describe('Menu', () => {

  beforeEach(() => {
    render(<MenuLayout userName='test' />);
  })

  it('Should render logos', () => {
    const appLogo = screen.getByAltText('playlist-master'); 
    const appMenuSVG = screen.getByAltText('menu'); 

    expect(appLogo).toBeInTheDocument();
    expect(appMenuSVG).toBeInTheDocument();
  });

  it('Should render button actions', () => {
    actions.forEach(action => {
      const buttonAction = screen.getByText(action);
      expect(buttonAction).toBeInTheDocument();
    });
  });
});
