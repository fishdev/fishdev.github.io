import React from 'react';
import { Link } from 'react-router-dom';

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
            {type.charAt(0).toUpperCase() + type.slice(1)}
            {name && (
              <React.Fragment>
                <span className="has-text-grey"> / </span>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </React.Fragment>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
