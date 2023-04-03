import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import PlaylistCard from './playlist-card';
import { playlistsMock } from '../../../mock/playlist.mock';
import { createTestStore } from '../../../store/fake-store';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockPlaylistItem = playlistsMock[0];

describe('PlaylistCard', () => {
  let fakeStore: any;
  beforeEach(() => {
    fakeStore = createTestStore();
  })

  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <PlaylistCard playlist={mockPlaylistItem} key={mockPlaylistItem.id} />
      </Provider>
    );
  });

  it('Should render all the playlist data', () => {
    const imageElement = screen.getByAltText(mockPlaylistItem.name);
    const nameElement = screen.getByText(mockPlaylistItem.name);
    const descriptionElement = screen.getByText(mockPlaylistItem.description);
    const playButton = screen.getByText('Play');
    expect(imageElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
  });
});
