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
  return (
    <div>
      <div className="details-bars is-size-5">
        <RangeEventBar range={range} event={event} />
        {github && <GitButton url={github} />}
        <div className="columns details-bar is-variable is-2 is-mobile">
          {url && (
            <div className="column is-narrow">
              <Button url={url} color="info" name="Website" rounded={false} icon="fas fa-globe" />
            </div>
          )}
          {allButtons &&
            allButtons.map(button => (
              <div key={button.name} className="column is-narrow">
                <Button {...button} rounded={false} color="info" />
              </div>
            ))}
        </div>
      </div>
      <div className="columns is-variable is-2 is-mobile">
        <div className="column is-narrow">
          <Link to="/" className="button is-small is-outlined is-light">
            <span className="icon">
              <i className="fas fa-arrow-left" />
            </span>
            &nbsp;
            <span>Back</span>
          </Link>
        </div>
        <div className="column is-narrow">
          <ShareButton />
        </div>
      </div>
    </div>
  );
};
