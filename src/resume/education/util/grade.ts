import { Institution } from '../interfaces';

export const computeOverallGrade = (institution: Institution): number => {
  const totalWeight = Object.values(institution.semesters).reduce(
    (acc, { weight }) => weight + acc,
    0
  );
  const totalGrade = Object.values(institution.semesters).reduce(
    (acc, { grade, weight }) => grade * weight + acc,
    0
  );
  return Math.floor((totalGrade / totalWeight) * 100) / 100;
};
