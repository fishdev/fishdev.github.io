import React from 'react';

import { social } from '../assets/data/social';
import { SocialButton } from './SocialButton';

export const Profile: React.FunctionComponent = () => (
  <div>
    <nav className="level">
      <div className="level-item has-text-centered">
        <figure className="image is-128x128">
          <img
            className="is-rounded"
            src={process.env.PUBLIC_URL + '/ashwin.jpg'}
            id="profile"
            alt="Me"
          />
        </figure>
      </div>
    </nav>
    <h3 className="title">Ashwin Srinivasan</h3>
    <h5 className="subtitle">Carnegie Mellon University</h5>
    <nav className="level">
      <div className="level-item has-text-centered">
        <div className="field is-grouped">
          {social.map(item => (
            <SocialButton key={item.name} {...item} />
          ))}
        </div>
      </div>
    </nav>
    <a href={process.env.PUBLIC_URL + '/resume.pdf'} className="has-text-white">
      <span>Download my resume</span>
      <span className="icon">
        <i className="fas fa-file-download" />
      </span>
    </a>
  </div>
);
