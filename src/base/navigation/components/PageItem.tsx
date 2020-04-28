import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../../resume';

interface Props {
  type: string;
  name?: string;
  path: string;
  onClick: () => void;
}

export const PageItem: React.FC<Props> = ({ type, name, path, onClick }) => {
  let icon = 'fas fa-sitemap';
  switch (type) {
    case 'home':
      icon = 'fas fa-home';
      break;
    case 'about':
      icon = 'fas fa-user';
      break;
    case 'resume':
      icon = 'fas fa-file-alt';
      break;
    case 'favorites':
      icon = 'fas fa-asterisk';
      break;
    case 'gallery':
      icon = 'fas fa-images';
      break;
  }

  return (
    <div className="column is-6">
      <Link className="box" to={path} onClick={onClick}>
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <span className="icon">
              <i className={icon} />
            </span>
          </div>
          <div className="column fancy">
            {capitalize(type)}
            {name && (
              <React.Fragment>
                <span className="has-text-grey"> / </span>
                {capitalize(name)}
              </React.Fragment>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
