import React from 'react';

import { Course } from '../interfaces';

interface Props extends Course {
  showDetails?: boolean;
}

interface State {
  descriptionShown: boolean;
}

export class CourseItem extends React.PureComponent<Props, State> {
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
    const { number, name, current, semester, url, description, showDetails } = this.props;
    const { descriptionShown } = this.state;
    return (
      <li>
        {number}: {name}
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
                <small className={current ? 'has-text-primary' : 'has-text-grey'}>
                  {current ? (
                    'Currently taking this course'
                  ) : (
                    <span>
                      Taken in <b>{semester}</b> semester
                    </span>
                  )}
                </small>
              </div>
            </div>
          </span>
        )}
      </li>
    );
  }
}
