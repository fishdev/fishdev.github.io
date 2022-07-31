import React, { useState } from 'react';
import { Element as ScrollElement } from 'react-scroll';

import { monthToString, monthIsFuture, arrToSentence } from '../../core';
import { Coursework } from './';
import { currentUniversity, otherUniversities, computeOverallGrade } from '../util';
import { ImageBox } from '../../../base';

export const Education = () => {
  const [showCourses, setShowCourses] = useState(false);
  const toggleCourses = () => setShowCourses(!showCourses);

  const uni = currentUniversity();
  const student = monthIsFuture(uni.range.end!);
  const otherUnis = otherUniversities();

  return (
    <ScrollElement name="education">
      <div className="columns is-vcentered is-variable is-5">
        {uni.photoUrl && (
          <div className="column is-5">
            <ImageBox
              image={{ original: process.env.PUBLIC_URL + '/cmu.jpg' }}
              shaded
              maxHeight="none"
            />
          </div>
        )}
        <div className="column content fancify-links">
          <p className="is-size-5">
            {student ? "I'm studying" : 'I studied'} {uni.majors.join(' and ')} at{' '}
            <a href={uni.url}>
              <strong>{uni.name}</strong>
            </a>
            {uni.minors.length > 0 && <span> with a minor in {arrToSentence(uni.minors)}</span>}. My
            cumulative {uni.scale} {student ? 'is' : 'was'}{' '}
            <strong>{computeOverallGrade(Object.values(uni.semesters)).toFixed(2)}</strong>.
            {student ? ' Expected graduation ' : ' Graduated '}
            in {monthToString(uni.range.end!)}.
            {otherUnis.length > 0 && (
              <span> Also attended {arrToSentence(otherUnis.map(({ name }) => name))}.</span>
            )}
          </p>
          <p className="is-size-7">
            Want to see a huge list of the courses {student ? "I'm taking" : 'I took'}?{' '}
            <a onClick={toggleCourses}>Click here</a>
          </p>
        </div>
      </div>
      {showCourses && (
        <div className="animated faster fadeInDown">
          <Coursework>
            <button className="delete" aria-label="delete" onClick={toggleCourses}></button>
          </Coursework>
        </div>
      )}
    </ScrollElement>
  );
};
