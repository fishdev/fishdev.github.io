import { Institution } from '../interfaces';

export const getInstitutionDescription = (institution: Institution) =>
  ({
    hs: 'high school',
    undergrad: 'undergraduate',
  }[institution.type]);
