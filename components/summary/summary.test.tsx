import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummaryLayout from './summary';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const actions = ['Play'];

describe('Menu', () => {

  beforeEach(() => {
    render(<SummaryLayout/>);
  })

  it('Should render logos', () => {
    const appLogo = screen.getByAltText('playlist-master'); 
    const completedSVG = screen.getByAltText('completed'); 

    expect(appLogo).toBeInTheDocument();
    expect(completedSVG).toBeInTheDocument();
  });

  it('Should render button actions', () => {
    actions.forEach(action => {
      const buttonAction = screen.getByText(action);
      expect(buttonAction).toBeInTheDocument();
    });
  });
});
