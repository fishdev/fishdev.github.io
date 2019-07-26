/**
 * Thanks to Spotify's requirement that all requests to its API be signed, I
 * can't actually use this code for anything. Sad. I'll leave it here anyway.
 */

import axios from 'axios';

const SPOTIFY_CLIENT_CREDENTIALS =
  'BQCIjZcQpa3OxwLSH4rTASXFMzqaUcMM4bBUJiOuLXUGc79bjLM3UTHoaAmAYbTXTCgL-FeXcJXkee25QDM';
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
