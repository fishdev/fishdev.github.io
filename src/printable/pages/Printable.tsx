import React from 'react';

import { Header, BlockSection } from '../components';
import {
  UNIVERSITY,
  universityMajors,
  universityMinors,
  coursework,
  currentSemester,
  hs,
  hsGrad,
  hsGPA,
  universityGrad,
  universityQPA,
  languages,
  technologies,
  volunteering,
  experience,
  projects,
  activities,
} from '../../assets/data';

export const Printable: React.FC = () => (
  <div className="print-page">
    <Header />
    <br />
    <div className="columns is-mobile">
      <div className="column is-4">
        <h4 className="title is-4 print-title">
          <b>Education</b>
        </h4>
        <p className="print-paragraph">
          <strong>{UNIVERSITY}</strong>
          <br />
          {universityMajors}
          <br />
          <div className="print-line-indented">Minors: {universityMinors.join(', ')}</div>
          {universityGrad}, QPA: {universityQPA.toFixed(2)}
        </p>
        <p className="content print-paragraph">
          <u>Relevant coursework:</u>
          <ul>
            {coursework.slice(0, 6).map((course) => (
              <li>
                {course.id} {course.name}
                {course.semester === currentSemester && (
                  <strong className="has-text-primary">*</strong>
                )}
              </li>
            ))}
          </ul>
        </p>
        <p className="content print-paragraph">
          <u>Teaching:</u>
          <ul>
            {coursework
              .filter((course) => course.ta)
              .map((course) => (
                <li>
                  {course.id} ({course.ta!.join(', ')})
                </li>
              ))}
          </ul>
        </p>
        <p className="print-paragraph">
          <strong>{hs}</strong>
          <br />
          {hsGrad}, GPA: {hsGPA.toFixed(1)}
        </p>
        <h4 className="title is-4 print-title">
          <b>Skills</b>
        </h4>
        <p className="print-paragraph">
          <strong>Languages:</strong>
          <br />
          {languages.map((skill) => skill.name).join(', ')}
        </p>
        <p className="print-paragraph">
          <strong>Technologies:</strong>
          <br />
          {technologies.map((skill) => skill.name).join(', ')}
        </p>
        <h4 className="title is-4 print-title">
          <b>Volunteering</b>
        </h4>
        {volunteering.map((sentence) => (
          <p className="print-paragraph">
            <strong>{sentence.content}</strong>
            <br />
            {sentence.extra}
          </p>
        ))}
      </div>
      <div className="column is-8">
        <h4 className="title is-4 print-title">
          <b>Experience</b>
        </h4>
        <BlockSection blocks={experience} showRanges={true} />
        <h4 className="title is-4 print-title">
          <b>Projects</b>
        </h4>
        <BlockSection blocks={projects} showRanges={false} />
        <h4 className="title is-4 print-title">
          <b>Activities</b>
        </h4>
        <BlockSection blocks={activities} showRanges={false} />
      </div>
    </div>
  </div>
);
