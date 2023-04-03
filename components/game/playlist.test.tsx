import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import PlaylistLayout from './playlists';
import { playlistsMock } from '../../mock/playlist.mock';
import { createTestStore } from '../../store/fake-store';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('PlaylistLayout', () => {
  let fakeStore: any;
  beforeEach(() => {
    fakeStore = createTestStore();
  })
  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <PlaylistLayout playlists={playlistsMock} />
      </Provider>
    );
  });

  it('Should render all the playlists', () => {
    const playElements = screen.getAllByText('Play');
    expect(playElements).toHaveLength(playlistsMock.length);
  });
});
