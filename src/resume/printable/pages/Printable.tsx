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
} from '../../../assets/data';
import { MetaTags, Footer, Navbar } from '../../../base';

export const Printable: React.FC = () => (
  <div>
    <MetaTags name="Resume - Printable" description="My resume in print-ready format" desktop />
    <section className="hero is-black is-small is-hidden-print">
      <div className="hero-head">
        <Navbar color="black" showMenu={false} />
      </div>
      <div className="hero-body">
        <div className="container">
          <span className="fancy has-text-centered">
            <h3 className="title gradientbg">Resume</h3>
            <p className="subtitle has-text-grey-light">
              <a href={process.env.PUBLIC_URL + '/resume.pdf'}>PDF</a>
              &nbsp;&nbsp;&nbsp;
              <a onClick={() => window.print()}>Print</a>
            </p>
          </span>
        </div>
      </div>
      <div className="hero-foot">
        <br />
      </div>
    </section>
    <div className="container">
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
              <span className="print-line-indented">Minors: {universityMinors.join(', ')}</span>
              <br />
              {universityGrad}, QPA: {universityQPA.toFixed(2)}
            </p>
            <p className="content print-paragraph">
              <u>Relevant coursework:</u>
            </p>
            <div className="content print-paragraph">
              <ul>
                {coursework.slice(0, 5).map((course) => (
                  <li key={course.id}>
                    {course.id} {course.name}
                    {course.semester === currentSemester && (
                      <strong className="has-text-primary">*</strong>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <p className="content print-paragraph">
              <u>Teaching:</u>
            </p>
            <div className="content print-paragraph">
              <ul>
                {coursework
                  .filter((course) => course.ta)
                  .map((course) => (
                    <li key={course.id}>
                      {course.id} ({course.ta!.join(', ')})
                    </li>
                  ))}
              </ul>
            </div>
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
              <span className="tags are-dark">
                {languages.map((skill) => (
                  <span className="tag" key={skill.id}>
                    {skill.name}
                  </span>
                ))}
              </span>
            </p>
            <p className="print-paragraph">
              <strong>Technologies:</strong>
              <br />
              <span className="tags are-dark">
                {technologies.map((skill) => (
                  <span className="tag" key={skill.id}>
                    {skill.name}
                  </span>
                ))}
              </span>
            </p>
            <h4 className="title is-4 print-title">
              <b>Volunteering</b>
            </h4>
            {volunteering.map((sentence, i) => (
              <p className="print-paragraph" key={i}>
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
            <BlockSection blocks={activities} showRanges={true} />
          </div>
        </div>
      </div>
    </div>
    <div className="is-hidden-print">
      <Footer />
    </div>
  </div>
);