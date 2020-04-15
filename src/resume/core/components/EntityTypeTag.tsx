import React from 'react';

import { EntityType } from '../interfaces';

interface Props {
  type: EntityType;
}

export const EntityTypeTag: React.FC<Props> = ({ type }) => (
  <span className="tag is-medium">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
);
