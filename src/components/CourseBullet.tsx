import React from 'react';

import { Course } from '../interfaces';
import { CourseSemester } from './CourseSemester';

interface Props extends Course {
  showDetails?: boolean;
}

interface State {
  descriptionShown: boolean;
}

export class CourseBullet extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    descriptionShown: false,
  };

  static defaultProps: Partial<Props> = {
    current: false,
    showDetails: false,
  };

  toggleDescription = () =>
    this.setState(({ descriptionShown }) => ({ descriptionShown: !descriptionShown }));

  render() {
    const { id, name, current, semester, url, description, showDetails } = this.props;
    const { descriptionShown } = this.state;
    return (
      <li>
        {id}: {name}
        {!showDetails && current && (
          <span className="tooltip" data-tooltip="Currently taking this course">
            <strong className="has-text-primary">*</strong>
          </span>
        )}
        {showDetails && (
          <span>
            <br />
            {descriptionShown && (
              <div className="notification is-marginless">
                <div className="content">{description}</div>
              </div>
            )}
            <div className="columns is-mobile">
              {url && (
                <div className="column is-narrow">
                  <small>
                    <a href={url}>Description</a>
                  </small>
                </div>
              )}
              {description && (
                <div className="column is-narrow">
                  <small>
                    <a onClick={this.toggleDescription}>
                      {descriptionShown ? <b>Hide work</b> : 'My work'}
                    </a>
                  </small>
                </div>
              )}
              <div className="column is-narrow">
                <CourseSemester {...this.props} />
              </div>
            </div>
          </span>
        )}
      </li>
    );
  }
}