import React from 'react';

import { Education } from '../components/Education';
import { Profile } from '../components/Profile';

const Home: React.FunctionComponent = () => (
  <div>
    <div className="modal" id="shortcuts">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <p>Handy keyboard shortcuts you can use to navigate my website:</p>
          <div className="columns">
            <div className="column">
              <div className="content">
                <ul>
                  <li>
                    <strong>G</strong>itHub
                  </li>
                  <li>
                    <strong>L</strong>inkedIn
                  </li>
                  <li>
                    E<strong>m</strong>ail
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <ul>
                  <li>
                    <strong>R</strong>esume
                  </li>
                  <li>
                    <strong>E</strong>ducation
                  </li>
                  <li>
                    <strong>P</strong>rojects
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <ul>
                  <li>
                    E<strong>x</strong>perience
                  </li>
                  <li>
                    <strong>A</strong>ctivities
                  </li>
                  <li>
                    <strong>S</strong>kills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
    <div className="columns is-gapless">
      <div className="column is-6 fancy has-text-centered">
        <div id="main" className="hero is-black is-bold pgh">
          <div className="hero-body">
            <div className="container">
              <Profile />
            </div>
          </div>
          <div className="hero-foot">
            <div className="container">
              <div className="columns is-mobile">
                <div className="column">
                  <p className="has-text-grey-light">
                    <small>
                      &copy; Copyright 2019 | Made in{' '}
                      <a className="has-text-grey-light" href="https://www.visitpittsburgh.com">
                        <strong>Pittsburgh, PA</strong>
                      </a>
                    </small>
                  </p>
                </div>
                <div className="column is-narrow">
                  <p
                    className="has-text-grey-light tooltip is-tooltip-top"
                    data-tooltip="Public domain image via Wikimedia Commons">
                    <span className="icon">
                      <i className="fas fa-info-circle" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-6">
        <div className="hero is-fullheight scrollable">
          <div id="resume-body" className="hero-body">
            <div className="container">
              <Education />
              <div className="columns is-marginless" id="projects">
                <div className="column is-2 fancier">Projects</div>
                <div className="column">
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">Assure: Connecting needs</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://github.com/fishdev/Assure">
                          <span className="icon is-small">
                            <i className="fab fa-lg fa-github" />
                          </span>
                        </a>
                        &nbsp;
                        <a href="https://devpost.com/software/assure-hep75l">
                          <span className="icon is-small">
                            <i className="fas fa-lg fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">
                      February 2019 | <a href="https://tartanhacks.com">TartanHacks</a>
                    </h6>
                    <div className="content">
                      <p>
                        Implemented Node.js + MongoDB + React service to make local donations more
                        accessible and secure.
                      </p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">CMULab: Secure check-in and scoring</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://github.com/QuantumStack/CMULab">
                          <span className="icon is-small">
                            <i className="fab fa-lg fa-github" />
                          </span>
                        </a>
                        &nbsp;
                        <a href="https://cmulab.quantumstack.xyz">
                          <span className="icon is-small">
                            <i className="fas fa-lg fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">January 2019 — Present</h6>
                    <div className="content">
                      <p>
                        Developing Node.js + MongoDB web service for teachers to score class
                        activities. Adopted by <a href="https://www.cs.cmu.edu/~15122/">15-122</a>{' '}
                        at CMU.
                      </p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">Flow: Real-time water consumption tracker</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://github.com/fishdev/Flow">
                          <span className="icon is-small">
                            <i className="fab fa-lg fa-github" />
                          </span>
                        </a>
                        &nbsp;
                        <a href="https://devpost.com/software/flow-m4r5gw">
                          <span className="icon is-small">
                            <i className="fas fa-lg fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">
                      September 2018 | <a href="http://hackcmu.org">HackCMU</a>
                    </h6>
                    <div className="content">
                      <p>
                        Created Node.js + Redis backend to limit and predict water usage with
                        machine learning algorithm.
                      </p>
                    </div>
                    <p>
                      <span className="icon has-text-warning">
                        <i className="fas fa-award" />
                      </span>
                      <span>2nd place for Riot Games sponsor prize</span>
                    </p>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">
                          Machine Learning Analysis of Judicial Records
                        </h5>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">
                      July — August 2017 |{' '}
                      <a href="http://sciences.pa-gov-schools.org">PA Governor's School</a>
                    </h6>
                    <div className="content">
                      <p>
                        Used <a href="https://scikit-learn.org">SciKit-Learn</a> library and Python
                        web scraper to collect 12 million case records and extract patterns. Created
                        decision tree and clustering algorithm to predict future case outcomes with
                        81.4% test accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">AwesomeBot</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://github.com/fishdev/AwesomeBot">
                          <span className="icon is-small">
                            <i className="fab fa-lg fa-github" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">October 2015 — January 2017</h6>
                    <div className="content">
                      <p>
                        Built multi-purpose Node.js bot for managing and entertaining over 10,000
                        online communities.
                      </p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">ImgCap: Automated image captioning</h5>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">September 2015 — March 2016</h6>
                    <div className="content">
                      <p>
                        A computer vision system to generate image captions on-the-fly to aid blind
                        users. Written in Java + <a href="https://opencv.org">OpenCV</a> library.
                      </p>
                    </div>
                    <p>
                      <span className="icon has-text-warning">
                        <i className="fas fa-award" />
                      </span>
                      <span>
                        1st place at <a href="http://www.pjas.net">PA Junior Academy of Science</a>
                      </span>
                    </p>
                    <p>
                      <span className="icon has-text-warning">
                        <i className="fas fa-award" />
                      </span>
                      <span>
                        2nd place in math/CS at{' '}
                        <a href="http://www.carnegiesciencecenter.org/stemcenter/stemcenter-science-fair/">
                          Pittsburgh Regional Science Fair
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns is-marginless" id="experience">
                <div className="column is-2 fancier">Experience</div>
                <div className="column">
                  <div className="project">
                    <h5 className="title is-5">Software Engineering Intern</h5>
                    <h6 className="subtitle is-6">Broadcom Corporation</h6>
                    <h6 className="subtitle is-6 extrasub">May 2019 — Present</h6>
                    <div className="content">
                      <p>
                        Contributing to Angular frontend and scalable server testing harness for{' '}
                        <a href="https://www.ca.com/us/products/ca-netmaster-network-management-tcpip.html">
                          NetMaster
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="project">
                    <h5 className="title is-5">Research Intern</h5>
                    <h6 className="subtitle is-6">
                      <a href="http://cups.cs.cmu.edu">CUPS Lab</a>, Carnegie Mellon University
                    </h6>
                    <h6 className="subtitle is-6 extrasub">June 2014 — June 2015</h6>
                    <div className="content">
                      <p>
                        Designed and developed{' '}
                        <a href="https://github.com/fishdev/PrivacyTracker">PrivacyTracker</a>, a
                        privacy plugin to increase user awareness of online tracking.
                      </p>
                    </div>
                    <p>
                      <span className="icon has-text-warning">
                        <i className="fas fa-award" />
                      </span>
                      <span>1st place at PA Junior Academy of Science</span>
                    </p>
                    <p>
                      <span className="icon has-text-warning">
                        <i className="fas fa-award" />
                      </span>
                      <span>3rd place in math/CS at Pittsburgh Regional Science Fair</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns is-marginless" id="activities">
                <div className="column is-2 fancier">Activities</div>
                <div className="column">
                  <div className="project">
                    <div className="multiheadsub columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">Google Tech Challenge</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://buildyourfuture.withgoogle.com/events/tech-challenge/">
                          <span className="icon is-small">
                            <i className="fas fa-lg fa-gamepad" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6 extrasub">April 2019</h6>
                    <p>
                      <span className="icon has-text-warning">
                        <i className="fas fa-award" />
                      </span>
                      <span>1st place team overall, including timed coding challenge</span>
                    </p>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">Plaid Umbrella Project</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://endtherain.com">
                          <span className="icon is-small">
                            <i className="fas fa-lg fa-umbrella" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">Technical & Software Lead</h6>
                    <h6 className="subtitle is-6 extrasub">September 2018 — Present</h6>
                    <div className="content">
                      <p>
                        Technical and software lead. Coordinating with electrical and mechanical
                        teams to build umbrella dispenser network, as well as Node.js + MongoDB
                        backend system.
                      </p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">The Tartan</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://thetartan.org">
                          <span className="icon is-small">
                            <i className="fas fa-lg fa-newspaper" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">Science & Technology Editor</h6>
                    <h6 className="subtitle is-6 extrasub">September 2018 — Present</h6>
                    <div className="content">
                      <p>Writing and editing articles, designing weekly paper layout.</p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="multihead columns is-mobile is-vcentered is-marginless">
                      <div className="column is-paddingless">
                        <h5 className="title is-5">ScottyLabs</h5>
                      </div>
                      <div className="column is-narrow is-paddingless">
                        &nbsp;
                        <a href="https://scottylabs.org">
                          <span className="icon is-small">
                            <i className="fas fa-lg fa-dog" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h6 className="subtitle is-6">September 2018 — Present</h6>
                    <div className="content">
                      <p>
                        Gave introductory React talk at{' '}
                        <a href="https://scottylabs.org/wdw/">Web Dev Weekend</a> 2018. Overhauled
                        Python + Flask API to make printing accessible on-campus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-marginless" id="skills">
                <div className="column is-2 fancier">Skills</div>
                <div className="column">
                  <div className="content">
                    <p>Programming languages:</p>
                    <ul>
                      <li>Javascript/Node.js – 7 years</li>
                      <li>HTML/CSS – 7 years</li>
                      <li>Python – 7 years</li>
                      <li>Java – 5 years</li>
                      <li>C – 3 years</li>
                    </ul>
                    <p>
                      Proficient in Git, Bash, and Linux. I have worked with web development
                      technologies such as <a href="https://expressjs.com">Express</a>,{' '}
                      <a href="https://www.djangoproject.com">Django</a>,{' '}
                      <a href="https://reactjs.org">React</a>,{' '}
                      <a href="https://angular.io">Angular</a>, and{' '}
                      <a href="https://getbootstrap.com">Bootstrap</a>. Experience with databases
                      including <a href="https://www.mongodb.com">MongoDB</a>,{' '}
                      <a href="https://redis.io">Redis</a>, and{' '}
                      <a href="https://www.postgresql.org">PostgreSQL</a>.
                    </p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
