import React from 'react';
import { getData } from '../../data';

import '../styles/business-card.scss';

export const BusinessCard = () => {
  return (
    <div className="columns is-centered">
      <div className="column business-card-container">
        <div className="card business-card city has-shadow">
          <div className="columns is-vcentered is-mobile">
            <div className="column is-6 height-placeholder patterned"></div>
            <div className="column">
              <div className="container is-fluid">
                <div className="box has-text-gold">
                  <span className="has-text-weight-bold">{getData().constants.fullName}</span>
                  <p className="is-size-7">{getData().constants.role}</p>
                  <p className="is-size-7">
                    {getData().constants.organization}, {getData().constants.location}
                  </p>
                  <hr />
                  <div className="block is-size-7">
                    <a href={process.env.PUBLIC_URL + '/resume.pdf'}>
                      <span>View my resume</span>
                      <span className="icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                    <br />
                    <div className="field is-grouped">
                      {getData().links.social.map(({ name, url, icon }) => (
                        <p className="control">
                          <a data-tooltip={name} key={name} href={url}>
                            <span className="icon is-small">
                              <i className={icon} />
                            </span>
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
