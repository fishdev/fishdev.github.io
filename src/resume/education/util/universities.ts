import { getData } from '../../../data';

export const getCurrentSemester = (uniId: string) =>
  getData().resume.education.universities[uniId].currentSemester;

export const currentUniversity = () =>
  getData().resume.education.universities[getData().resume.education.focusedUniversity];

export const otherUniversities = () => {
  const uniIds = Object.keys(getData().resume.education.universities);
  uniIds.splice(uniIds.indexOf(getData().resume.education.focusedUniversity), 1);
  return uniIds.map((id) => getData().resume.education.universities[id]);
};

export const allUniversities = () => Object.values(getData().resume.education.universities);
