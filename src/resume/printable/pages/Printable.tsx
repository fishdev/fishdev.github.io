import React from 'react';

import { Header, BlockSection } from '../components';
import { MetaTags, Footer, Navbar } from '../../../base';
import { monthToString, arrToSentence, capitalize, capitalizeSentence } from '../../core';
import { allUniversities, getCurrentSemester } from '../../education';
import { getData } from '../../../data';

export const Printable: React.FC = () => {
  const unis = allUniversities();
  console.log(unis);
  return (
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
              {unis.map((uni, i) => (
                <p key={i} className="print-paragraph">
                  <strong>{uni.name}</strong>
                  <br />
                  {uni.degree} in {arrToSentence(uni.majors.map(capitalizeSentence))}
                  <br />
                  <span className="print-line-indented">Minors: {uni.minors.join(', ')}</span>
                  <br />
                  {monthToString(uni.range.end!)}, {uni.scale}: {uni.grade.toFixed(2)}
                </p>
              ))}
              {getData().resume.education.coursework && (
                <React.Fragment>
                  <p className="content print-paragraph">
                    <u>Relevant coursework:</u>
                  </p>
                  <div className="content print-paragraph">
                    <ul>
                      {getData()
                        .resume.education.coursework!.slice(0, 5)
                        .map((course) => (
                          <li key={course.id}>
                            {course.id} {course.name}
                            {course.semester === getCurrentSemester(course.institution) && (
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
                      {getData()
                        .resume.education.coursework!.filter((course) => course.ta)
                        .map((course) => (
                          <li key={course.id}>
                            {course.id} ({course.ta!.join(', ')})
                          </li>
                        ))}
                    </ul>
                  </div>
                </React.Fragment>
              )}
              {getData().resume.education.schools &&
                Object.values(getData().resume.education.schools!).map((school, i) => (
                  <p key={i} className="print-paragraph">
                    <strong>{school.name}</strong>
                    <br />
                    {monthToString(school.range.end!)}, {school.scale}: {school.grade.toFixed(1)}
                  </p>
                ))}
              <h4 className="title is-4 print-title">
                <b>Skills</b>
              </h4>
              {getData().resume.skills.map(({ name, data }) => (
                <p key={name} className="print-paragraph">
                  <strong>{capitalize(name)}:</strong>
                  <br />
                  <span className="tags are-dark">
                    {data.map((skill) => (
                      <span className="tag" key={skill.id}>
                        {skill.name}
                      </span>
                    ))}
                  </span>
                </p>
              ))}
              {getData().resume.volunteering && (
                <React.Fragment>
                  <h4 className="title is-4 print-title">
                    <b>Volunteering</b>
                  </h4>
                  {getData().resume.volunteering!.map((sentence, i) => (
                    <p className="print-paragraph" key={i}>
                      <strong>{sentence.content}</strong>
                      <br />
                      {sentence.extra}
                    </p>
                  ))}
                </React.Fragment>
              )}
            </div>
            <div className="column is-8">
              {getData().resume.blocks.map(({ name, data }) => (
                <React.Fragment key={name}>
                  <h4 className="title is-4 print-title">
                    <b>{capitalize(name)}</b>
                  </h4>
                  <BlockSection blocks={data} showRanges={name !== 'projects'} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="is-hidden-print">
        <Footer />
      </div>
    </div>
  );
};
