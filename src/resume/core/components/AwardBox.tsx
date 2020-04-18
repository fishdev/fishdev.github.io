import React from 'react';
import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  color?: string;
  icon?: string;
}
export class AwardBox extends React.PureComponent<Props> {
  static defaultProps: Props = {
    color: 'warning',
    icon: 'fas fa-award',
  };

  render() {
    const { color, icon, children } = this.props;
    return (
      <article className={'notification is-' + color}>
        <div className="columns is-mobile is-vcentered">
          <div className="column is-narrow">
            <ScrollAnimation animateIn="tada" className={'icon is-large has-text-dark'}>
              <i className={classNames('fa-2x', icon)} />
            </ScrollAnimation>
          </div>
          <div className="column">
            <h6 className="title is-6 fancy has-text-dark">{children}</h6>
          </div>
        </div>
      </article>
    );
  }
}
