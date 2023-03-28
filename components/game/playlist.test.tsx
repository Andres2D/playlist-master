import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlaylistLayout from './playlists';
import { playlistsMock } from '../../mock/playlist.mock';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('PlaylistLayout', () => {
  beforeEach(() => {
    render(<PlaylistLayout playlists={playlistsMock} />);
  });

  it('Should render all the playlists', () => {
    const playElements = screen.getAllByText('Play');
    expect(playElements).toHaveLength(playlistsMock.length);
  });
});
