import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MenuLayout from './menu';
import { createTestStore } from '../../store/fake-store';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const actions = ['Play'];

describe('Menu', () => {

  let fakeStore: any;
  beforeEach(() => {
    fakeStore = createTestStore();
  })

  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <MenuLayout/>
      </Provider>
    );
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
