import axios from 'axios';

const SPOTIFY_CLIENT_CREDENTIALS =
  'BQAI7b0t3fr_2xPWVD11kI_gzEvokNwqKGYjxkzLduqPsQfvTDKueMZw0v5J2nw15rfZ6ZWYZFp-knsITqXDsYJVZ5ttINqJ2LKINoFe9yTGBKpWRAnnWV555g7MMAbZxZlDkbeol4R3wac0aV1fNGFVk7iS3XjSsPUzeD352_Rt9g';
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
