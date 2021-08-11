const coursework = [
  {
    id: '15-451',
    name: 'Algorithm Design and Analysis',
    semester: 'Spring 2021',
    url: 'https://www.coursicle.com/cmu/courses/CS/15451/',
    institution: 'cmu',
  },
  {
    id: '15-411',
    name: 'Compiler Design',
    semester: 'Fall 2020',
    ta: ['Fall 2021'],
    url: 'https://www.coursicle.com/cmu/courses/CS/15411/',
    institution: 'cmu',
    description:
      'Built an optimizing compiler for a C-like language to x86-64 assembly, written in OCaml.',
  },
  {
    id: '05-391',
    name: 'Designing Human-Centered Software',
    semester: 'Fall 2020',
    url: 'https://www.coursicle.com/cmu/courses/HCI/05391/',
    institution: 'cmu',
  },
  {
    id: '15-440',
    name: 'Distributed Systems',
    semester: 'Spring 2021',
    url: 'https://www.coursicle.com/cmu/courses/CS/15440/',
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
    id: '15-213',
    name: 'Introduction to Computer Systems',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/CS/15213/',
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
    id: '05-392',
    name: 'Interaction Design Overview',
    semester: 'Spring 2021',
    url: 'https://www.coursicle.com/cmu/courses/HCI/05392/',
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
    id: '15-317',
    name: 'Constructive Logic',
    semester: 'Fall 2020',
    url: 'https://www.coursicle.com/cmu/courses/CS/15317/',
    institution: 'cmu',
  },
  {
    id: '80-251',
    name: 'Modern Philosophy',
    semester: 'Spring 2021',
    url: 'https://www.coursicle.com/cmu/courses/PHI/80251/',
    institution: 'cmu',
  },
  {
    id: '80-226',
    name: 'Revolutions in Science',
    semester: 'Fall 2020',
    url: 'https://www.coursicle.com/cmu/courses/PHI/80226/',
    institution: 'cmu',
  },
  {
    id: '17-200',
    name: 'Ethics and Policy Issues in Computing',
    semester: 'Fall 2020',
    url: 'https://www.coursicle.com/cmu/courses/ISR/17200/',
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
    ta: ['Spring 2020', 'Fall 2020', 'Spring 2021'],
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
  },
  {
    id: '80-150',
    name: 'Nature of Reason',
    semester: 'Spring 2021',
    url: 'https://www.coursicle.com/cmu/courses/PHI/80150/',
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
    currentSemester: 'Fall 2021',
    degree: 'BS',
    majors: ['computer science'],
    minors: ['human-computer interaction', 'philosophy'],
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
      'Fall 2020': {
        weight: 54,
        grade: 3.83,
      },
      'Spring 2021': {
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
