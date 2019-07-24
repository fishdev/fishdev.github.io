import axios from 'axios';

const SPOTIFY_CLIENT_CREDENTIALS =
  'BQClDg8jmlg-e6vIAseO7WLTOlRZBhjLkKI5EOBRX61ozYXS7Kr3776lv0AkaLHHtrE5bZUvsw7964YM8fQ';
const ASHWIN_USERNAME = 'g5ojwey9iyo08skvmjnx3dih3';

const ax = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `Bearer ${SPOTIFY_CLIENT_CREDENTIALS}`,
  },
});

export const getPlaylists = async (): Promise<SpotifyApi.PlaylistObjectSimplified[]> => {
  const response = await ax.get(`users/${ASHWIN_USERNAME}/playlists`);
  return response.data.items;
};
