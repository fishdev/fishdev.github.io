import React from 'react';
import classNames from 'classnames';

import { ColorButton } from '../interfaces';

interface Props extends ColorButton {
  size?: 'small' | 'medium' | 'large';
  outlined?: boolean;
  rounded?: boolean;
}

export class AnchorButton extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    rounded: true,
    outlined: true,
  };

  render() {
    const { color, url, icon, name, title, size, outlined, rounded } = this.props;
    return (
      <a
        className={classNames(
          'button',
          { 'is-outlined': outlined },
          { 'is-rounded': rounded },
          'is-' + color,
          { ['is-' + size]: size },
          { 'tooltip is-tooltip-bottom': title }
        )}
        href={url}
        data-tooltip={title}>
        <span className="icon is-small">
          <i className={icon} />
        </span>
        {name && <span>{name}</span>}
      </a>
    );
  }
}
