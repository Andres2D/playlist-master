import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuLayout from './menu';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const actions = ['Settings', 'Play', 'Logout'];

describe('Auth', () => {

  beforeEach(() => {
    render(<MenuLayout userName='test' />);
  })

  it('Should render message', () => {
    const message = screen.getByTestId('message');
    expect(message).toBeInTheDocument();
    expect(message.textContent?.trim()).toBe('Hey test, Ready to play?'.trim());
  });

  it('Should render button actions', () => {
    actions.forEach(action => {
      const buttonAction = screen.getByText(action);
      expect(buttonAction).toBeInTheDocument();
    });
  });
});
