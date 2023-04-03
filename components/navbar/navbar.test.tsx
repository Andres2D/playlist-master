import Navbar from './navbar';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { createTestStore } from '../../store/fake-store';

const props = {
  userName: 'test',
  image:'https://bit.ly/kent-c-dodds'
};

const actions = ['Menu', 'Play', 'Logout'];

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));


describe('Navbar', () => {
  let fakeStore: any;
  beforeEach(() => {
    fakeStore = createTestStore();
  })
  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <ChakraProvider>
          <Navbar userName={props.userName} image={props.image} />
        </ChakraProvider>
      </Provider>
      );
    });

  it('Should render avatar', () => {
    const avatarElement = screen.getByRole('img');
    expect(avatarElement).toBeInTheDocument();
  });
  
  it('Should show login options on click avatar', async() => {
    const avatarElement = screen.getByRole('img');
    fireEvent.click(avatarElement);
    
    await waitFor(() => {
      const userNameTitle = screen.getByText(props.userName);
      actions.forEach(action => {
        const actionElement = screen.getByText(action);
        expect(actionElement).toBeInTheDocument();
      })

      expect(userNameTitle).toBeInTheDocument();
      expect(avatarElement).toBeInTheDocument();
    });
  });
});
