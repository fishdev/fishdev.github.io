import React from 'react';
import classNames from 'classnames';

interface Props {
  type: 'a' | 'button';
  important: boolean;
  toggle: () => void;
}

export const ImportantToggle: React.FC<Props> = ({ type, important, toggle }) => {
  const Element = type;
  return (
    <Element
      className={classNames(
        'tooltip is-tooltip-bottom',
        type === 'a'
          ? 'is-hidden-mobile has-text-grey-light'
          : 'button is-rounded is-outlined is-light is-hidden-tablet'
      )}
      data-tooltip={important ? 'Show everything' : 'Show only important stuff'}
      onClick={toggle}>
      <span className="icon">
        <i className={classNames('fas', important ? 'fa-list' : 'fa-star')} />
      </span>
    </Element>
  );
};
