const coursework = [
  {
    id: '15-213',
    name: 'Introduction to Computer Systems',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/CS/15213/',
    institution: 'cmu',
  },
  {
    id: '10-315',
    name: 'Introduction to Machine Learning',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/MLG/10315/',
    institution: 'cmu',
  },
  {
    id: '15-210',
    name: 'Parallel and Sequential Data Structures and Algorithms',
    semester: 'Fall 2019',
    url: 'https://www.coursicle.com/cmu/courses/CS/15210/',
    institution: 'cmu',
  },
  {
    id: '17-214',
    name: 'Principles of Software Construction',
    semester: 'Fall 2019',
    url: 'https://www.coursicle.com/cmu/courses/SE/17214/',
    institution: 'cmu',
  },
  {
    id: '05-436',
    name: 'Usable Privacy and Security',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/HCI/05436/',
    institution: 'cmu',
  },
  {
    id: '15-251',
    name: 'Great Ideas in Theoretical Computer Science',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/CS/15251/',
    institution: 'cmu',
  },
  {
    id: '19-101',
    name: 'Introduction to Engineering and Public Policy',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/EPP/19101/',
    institution: 'cmu',
  },
  {
    id: '15-150',
    name: 'Functional Programming',
    semester: 'Spring 2019',
    ta: ['Spring 2020'],
    url: 'https://www.coursicle.com/cmu/courses/CS/15150/',
    institution: 'cmu',
  },
  {
    id: '15-151',
    name: 'Math Foundations of Computer Science',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/CS/15151/',
    institution: 'cmu',
  },
  {
    id: '15-122',
    name: 'Principles of Imperative Computation',
    semester: 'Fall 2018',
    ta: ['Fall 2019'],
    url: 'https://www.coursicle.com/cmu/courses/CS/15122/',
    institution: 'cmu',
  },
  {
    id: '21-241',
    name: 'Matrices and Linear Transformations',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/MSC/21241/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '80-100',
    name: 'Introduction to Philosophy',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/PHI/80100/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '33-104',
    name: 'Experimental Physics',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/PHY/33104/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '36-218',
    name: 'Probability Theory for Computer Scientists',
    semester: 'Fall 2019',
    url: 'https://www.coursicle.com/cmu/courses/STA/36218/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '80-180',
    name: 'Nature of Language',
    semester: 'Fall 2019',
    url: 'https://www.coursicle.com/cmu/courses/PHI/80180/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '79-240',
    name: 'Development of American Culture',
    semester: 'Fall 2019',
    url: 'https://www.coursicle.com/cmu/courses/HIS/79240/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '73-102',
    name: 'Principles of Microeconomics',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/ECO/73102/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '21-295',
    name: 'Putnam Seminar',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/MSC/21295/',
    institution: 'cmu',
    hidden: true,
  },
  {
    id: '76-101',
    name: 'Interpretation and Argument',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/ENG/76101/',
    institution: 'cmu',
    hidden: true,
  },
];

export const universities = {
  cmu: {
    name: 'Carnegie Mellon University',
    url: 'https://cs.cmu.edu',
    range: {
      start: {
        month: 8,
        year: 2018,
      },
      end: {
        month: 5,
        year: 2022,
      },
    },
    currentSemester: 'Fall 2020',
    degree: 'BS',
    majors: ['computer science'],
    minors: ['human-computer interaction', 'software engineering'],
    coursework,
    semesters: {
      'Fall 2018': {
        grade: 3.56,
        weight: 45,
      },
      'Spring 2019': {
        grade: 3.44,
        weight: 43,
      },
      'Fall 2019': {
        grade: 3.76,
        weight: 51,
      },
      'Spring 2020': {
        grade: 3.76,
        weight: 51,
      },
    },
    scale: 'QPA',
    maxGrade: 4,
    units: 'unit',
  },
};

export const schools = {
  dice: {
    name: 'Taylor Allderdice High School',
    url: 'https://discoverpps.org/allderdice',
    range: {
      start: {
        month: 8,
        year: 2014,
      },
      end: {
        month: 5,
        year: 2018,
      },
    },
    semesters: {
      All: {
        grade: 4.0,
        weight: 1,
      },
    },
    scale: 'GPA',
    maxGrade: 4,
  },
};
