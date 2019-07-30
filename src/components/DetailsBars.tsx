import React from 'react';
import { Link } from 'react-router-dom';

import { Entity, Block } from '../interfaces';
import { Range } from './Range';
import { GitButton } from './GitButton';
import { SocialButton } from './SocialButton';
import { ShareButton } from './ShareButton';

export const DetailsBars: React.FC<Entity> = ({ type, data }) => {
  const { range, event, github, url, buttons } = data as Block;
  return (
    <div>
      <div className="columns is-vcentered details-bar">
        <div className="column">
          <Link to="/resume" className="button is-small">
            <span className="icon">
              <i className="fas fa-arrow-left" />
            </span>
            &nbsp;
            <span>back to resume</span>
          </Link>
        </div>
        {range && (
          <div className="column is-narrow">
            <Range {...range} />
          </div>
        )}
        {event && (
          <div className="column is-narrow">
            <a href={event.url}>{event.name}</a>
          </div>
        )}
        <div className="column is-narrow">
          <span className="tag is-medium">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
      </div>
      <div className="columns is-vcentered details-bar is-variable is-2">
        {github && (
          <div className="column is-narrow">
            <GitButton url={github} />
          </div>
        )}
        <div className="column" />
        {url && (
          <div className="column is-narrow">
            <SocialButton
              url={url}
              color="link"
              name="Website"
              rounded={false}
              icon="fas fa-globe"
            />
          </div>
        )}
        {buttons &&
          buttons.map(button => (
            <div className="column is-narrow">
              <SocialButton {...button} rounded={false} color="primary" />
            </div>
          ))}
        <div className="column is-narrow">
          <ShareButton />
        </div>
      </div>
    </div>
  );
};
