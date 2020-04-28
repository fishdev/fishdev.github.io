import data from '../../../assets/data';

export const getCurrentSemester = (uniId: string) =>
  data.resume.education.universities[uniId].currentSemester;

export const currentUniversity = () =>
  data.resume.education.universities[data.resume.education.currentUniversity];

export const otherUniversities = () => {
  const uniIds = Object.keys(data.resume.education.universities);
  uniIds.splice(uniIds.indexOf(data.resume.education.currentUniversity), 1);
  return uniIds.map((id) => data.resume.education.universities[id]);
};

export const allUniversities = () => Object.values(data.resume.education.universities);
