import axios from 'axios';

const SPOTIFY_CLIENT_CREDENTIALS =
  'BQC7VwEGf5P3TAk7RsM401B5HrYG66xpmfeyLXrHiOlmBYqdZOCFF4R4zPCa0Y_FNRLpK6e937-OYGe4Wx8';
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
