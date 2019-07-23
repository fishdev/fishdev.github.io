import React from 'react';
import social from '../assets/data/social';
import SocialButton from './SocialButton';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <nav class="level">
          <div class="level-item has-text-centered">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src={process.env.PUBLIC_URL + '/ashwin.jpg'}
                id="profile"
                alt="Me"
              />
            </figure>
          </div>
        </nav>
        <h3 class="title">Ashwin Srinivasan</h3>
        <h5 class="subtitle">Carnegie Mellon University</h5>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div class="field is-grouped">
              {social.map(item => (
                <SocialButton {...item} />
              ))}
            </div>
          </div>
        </nav>
        <a href="resume.pdf" class="has-text-white">
          <span>Download my resume</span>
          <span class="icon">
            <i class="fas fa-file-download" />
          </span>
        </a>
      </div>
    );
  }
}

export default Profile;
