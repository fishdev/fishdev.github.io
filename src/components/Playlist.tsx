import React from 'react';
import pluralize from 'pluralize';

export const Playlist: React.FC<SpotifyApi.PlaylistObjectSimplified> = ({
  images,
  name,
  tracks,
  external_urls,
}) => (
  <div className="notification is-dark">
    <article className="media">
      {images[0] && (
        <figure className="media-left">
          <p className="image is-square is-64x64">
            <img className="scale-square" src={images[0].url} alt="Playlist cover" />
          </p>
        </figure>
      )}
      <div className="media-content">
        <h3 className="title is-hidden-mobile">{name}</h3>
        <h4 className="title is-hidden-tablet">{name}</h4>
        <h5 className="subtitle">{pluralize('song', tracks.total, true)}</h5>
      </div>
      <div className="media-right">
        <a
          className="button is-success is-rounded tooltip"
          href={external_urls.spotify}
          data-tooltip="View on Spotify">
          <span className="icon is-small">
            <i className="fas fa-external-link-alt" />
          </span>
        </a>
      </div>
    </article>
  </div>
);
