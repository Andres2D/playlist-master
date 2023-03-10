export const mockGameQuestion = {
  lyrics: '"..And I was made a mercenary..."',
  answers: [
    'Evil - Mercyful Fate',
    'Time’s Up - O.C',
    'Walk - Pantera',
    'Call me - 90sFlav',
  ],
};

export const spotifyGetTrackResponseMock: any = {
  album: {
    album_group: 'album',
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
        },
        href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
        id: '5eAWCfyUhZtHHtBdNk56l1',
        name: 'System Of A Down',
        type: 'artist',
        uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
      },
    ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/4UL3EyG3UCpQYs7ZEUNX46',
    },
    href: 'https://api.spotify.com/v1/albums/4UL3EyG3UCpQYs7ZEUNX46',
    id: '4UL3EyG3UCpQYs7ZEUNX46',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273610c84d3f7d3b12ca9030ce6',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02610c84d3f7d3b12ca9030ce6',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851610c84d3f7d3b12ca9030ce6',
        width: 64,
      },
    ],
    is_playable: true,
    name: 'Steal This Album!',
    release_date: '2002-11-26',
    release_date_precision: 'day',
    total_tracks: 16,
    type: 'album',
    uri: 'spotify:album:4UL3EyG3UCpQYs7ZEUNX46',
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
      },
      href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
      id: '5eAWCfyUhZtHHtBdNk56l1',
      name: 'System Of A Down',
      type: 'artist',
      uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
    },
  ],
  available_markets: [],
  disc_number: 1,
  duration_ms: 249626,
  explicit: true,
  external_ids: {
    isrc: 'USSM10213332',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/3LrBpLjDs4a1Vhh8q2P3F7',
  },
  href: 'https://api.spotify.com/v1/tracks/3LrBpLjDs4a1Vhh8q2P3F7',
  id: '3LrBpLjDs4a1Vhh8q2P3F7',
  is_local: false,
  name: 'Mr. Jack',
  popularity: 0,
  preview_url: null,
  track_number: 7,
  type: 'track',
  uri: 'spotify:track:3LrBpLjDs4a1Vhh8q2P3F7',
};

export const musixmatchGetTrackResponseMock: any = {
  message: {
    header: {
      status_code: 200,
      execute_time: 0.012704133987427,
    },
    body: {
      track: {
        track_id: 84683295,
        track_name: 'Mr. Jack',
        track_name_translation_list: [],
        track_rating: 64,
        commontrack_id: 782046,
        instrumental: 0,
        explicit: 1,
        has_lyrics: 1,
        has_subtitles: 1,
        has_richsync: 0,
        num_favourite: 473,
        album_id: 20922014,
        album_name: 'Steal This Album!',
        artist_id: 6659,
        artist_name: 'System of a Down',
        track_share_url:
          'https://www.musixmatch.com/lyrics/System-of-a-Down/Mr-Jack?utm_source=application&utm_campaign=api&utm_medium=',
        track_edit_url:
          'https://www.musixmatch.com/lyrics/System-of-a-Down/Mr-Jack/edit?utm_source=application&utm_campaign=api&utm_medium=',
        restricted: 0,
        updated_time: '2023-01-19T08:31:40Z',
        primary_genres: {
          music_genre_list: [
            {
              music_genre: {
                music_genre_id: 21,
                music_genre_parent_id: 34,
                music_genre_name: 'Rock',
                music_genre_name_extended: 'Rock',
                music_genre_vanity: 'Rock',
              },
            },
          ],
        },
      },
    },
  },
};

export const musixmatchGetLyricsResponseMock: any = {
  message: {
    header: {
      status_code: 200,
      execute_time: 0.016963005065918,
    },
    body: {
      lyrics: {
        lyrics_id: 30693595,
        explicit: 1,
        lyrics_body:
          'Hey Mr. Jack\nIs that the mouthwash in your eyes?\nHey Mr. Jack\nIs that the cause of your surprise?\nHey, where you at?\nOn the side of the freeway in the car\nHey, where you at?\nOn the side of the freeway in the car\nIn the car\nOn the side of the freeway in the\n\nHey, Mr. Jack (hey!)\nIs that the trick of your disguise?\nHey Mr. Jack\nIs that the cause of your demise?\nHey, where you at?\nOn the side of the freeway in the car\nHey, where you at?\nOn the side of the freeway in the car\nIn the car\n...\n\n******* This Lyrics is NOT for Commercial use *******',
        script_tracking_url:
          'https://tracking.musixmatch.com/t1.0/m_js/e_1/sn_0/l_30693595/su_0/rs_0/tr_3vUCALLPeqW8gB0Y7lWMdP1L1zb-dqAOeMlvPZzwrMpWislGEwJ3H7zTf3C3IY9Y6fUpJQHAK0E6l-3fRKipjCK0MDRXehzuPaYAUkPOe4Eq3ElTdMyMsxNaBEeFhMAempiw-Rr8WM5Du3WRhYUs7f8FyyGhOo_ONmYK7dpJLl1wKYybS78j2iwTX9H_2AH-6svqZvg5d_jk1s5fkru_68it1oNntx35UbQ73Ijmc3rRnz97I0oQCRyOdEOgU29cgdAz4ufv8v2WeL-82Zo-rv2H1bOcpBMwjEGXWy57Gypl5k0b3Z449iR9RYYD8S1H5V24XoeDFmGqlqh-9eK61euZjVIs_6D9qKN0Sw5yJHkcvQZ-sp3yETXVY7-gio9DZ3lm58nuXEmjBTwiLTvn2huw4j2XBgweidW9nbTM/',
        pixel_tracking_url:
          'https://tracking.musixmatch.com/t1.0/m_img/e_1/sn_0/l_30693595/su_0/rs_0/tr_3vUCAIe7aFQ_2NusPA-FnF0FBCYxeEEUkxvaW7hlfz2snx8Jiz1m0sX6quWKy6DdvAX0LCMTtXxZB4f2HDDX8WlCXUBTKQhukYma_OBWGEDgM6lrSSXukiQlQ6Nb9PGWqmU0Sh70CY9J_bREWi8OO6P6anNG0fGrDZUV-G7cPfx0B7jkfb0aBSn95eH1Fbw654q7nVu0cJGEnQVhc1DEo9srohyi8n5lUwxda9NcRrlwlP5T9kWraG59UkiW0Cc4yTPRrYh3k6ZR2Qzsb8C7PAJeLxCSzuD5tPTrp7cPk5KeaTTDsQkB7z9PZR-pqqA6Y4jpZZL7hD0t-PIwquD9zdNS_vWx-QQO9EfU9CjLIpPa5ZXDy7rzSTQ4COhXISshPB8yjfuM0btT_B08QNHbuRWKgwyo_oVYC2akB4iL/',
        lyrics_copyright:
          'Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.',
        updated_time: '2023-01-19T08:31:39Z',
      },
    },
  },
};
