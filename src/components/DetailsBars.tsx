import React from 'react';
import { Link } from 'react-router-dom';

import { Entity, Block } from '../interfaces';
import { RangeEventBar } from './RangeEventBar';
import { EntityTypeTag } from './EntityTypeTag';
import { DropdownList } from './DropdownList';
import { Range } from './Range';
import { ShareButton } from './ShareButton';
import { GitButton } from './GitButton';
import { Button } from './Button';
import { makeButtonsList } from '../util';

export const DetailsBars: React.FC<Entity> = ({ type, data }) => {
  const { range, event, github, url, buttons, moreButtons } = data as Block;
  let allButtons = buttons || moreButtons;
  if (buttons && moreButtons) allButtons = buttons.concat(moreButtons);
  const dropdownItems = [<ShareButton key="drop-share" type="dropdown" />];
  if (event) {
    dropdownItems.unshift(
      <a key="drop-event" href={event.url} className="dropdown-item">
        {event.name}
      </a>
    );
  }
  if (range)
    dropdownItems.unshift(
      <div key="drop-range" className="dropdown-item">
        <Range {...range!} />
      </div>
    );
  return (
    <div>
      <div className="columns is-mobile is-vcentered details-bar">
        <div className="column">
          <Link to="/resume" className="button is-small">
            <span className="icon">
              <i className="fas fa-arrow-left" />
            </span>
            &nbsp;
            <span>
              Back<span className="is-hidden-mobile"> to resume</span>
            </span>
          </Link>
        </div>
        <div className="column is-narrow is-hidden-mobile">
          <RangeEventBar range={range} event={event} />
        </div>
        <div className="column is-narrow">
          <EntityTypeTag type={type} />
        </div>
        <div className="column is-narrow is-hidden-tablet">
          <DropdownList
            items={makeButtonsList(allButtons, github, url)}
            staticItems={dropdownItems}>
            <button className="button is-link is-small">
              <span className="icon">
                <i className="fas fa-info" />
              </span>
            </button>
          </DropdownList>
        </div>
      </div>
      <div className="columns is-vcentered details-bar is-variable is-2 is-hidden-mobile">
        {github && (
          <div className="column is-narrow">
            <GitButton url={github} />
          </div>
        )}
        <div className="column" />
        {url && (
          <div className="column is-narrow">
            <Button url={url} color="link" name="Website" rounded={false} icon="fas fa-globe" />
          </div>
        )}
        {allButtons &&
          allButtons.map(button => (
            <div key={button.name} className="column is-narrow">
              <Button {...button} rounded={false} color="primary" />
            </div>
          ))}
        <div className="column is-narrow">
          <ShareButton />
        </div>
      </div>
    </div>
  );
};
