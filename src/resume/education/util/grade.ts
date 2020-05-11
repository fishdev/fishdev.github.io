import { Semester } from '../interfaces';

export const computeOverallGrade = (semesters: Semester[]): number => {
  const totalWeight = semesters.reduce((acc, { weight }) => weight + acc, 0);
  const totalGrade = semesters.reduce((acc, { grade, weight }) => grade * weight + acc, 0);
  return Math.floor((totalGrade / totalWeight) * 100) / 100;
};
