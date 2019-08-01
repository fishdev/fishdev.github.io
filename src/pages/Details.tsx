import React from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import ImageGallery from 'react-image-gallery';

import { getEntity } from '../util';
import { Block } from '../interfaces';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { DetailsBars } from '../components/DetailsBars';
import { AwardBox } from '../components/AwardBox';

interface UrlProps {
  id: string;
}

@(withRouter as any)
export class Details extends React.PureComponent<RouteComponentProps<UrlProps>> {
  render() {
    const { match } = this.props;
    const entity = getEntity(match.params.id.toLowerCase());
    if (!entity || !['projects', 'experience', 'activities'].includes(entity.type))
      return <Redirect to="/resume" />;
    const { name, tagline, extra, description, info, awards, images } = entity.data as Block;
    return (
      <div>
        <Helmet>
          <title>
            {entity.type.charAt(0).toUpperCase() + entity.type.slice(1)} - {name} | Ashwin
            Srinivasan
          </title>
        </Helmet>
        <section className="hero is-black">
          <div className="hero-head">
            <Navbar />
          </div>
        </section>
        <section className="hero is-link gradient">
          <div className="hero-body">
            <ResponsiveContainer centered={true} size="large">
              <h3 className="title">{name}</h3>
              {tagline && <h5 className="subtitle">{tagline}</h5>}
              {extra && <h5 className="subtitle">{extra}</h5>}
            </ResponsiveContainer>
          </div>
        </section>
        <section className="section">
          <ResponsiveContainer size="large">
            <DetailsBars {...entity} />
            <br className="is-hidden-mobile" />
            <div className="content">{info || description}</div>
            {awards && (
              <div className="columns is-multiline is-variable is-2">
                {awards.map((award, i) => (
                  <div className="column is-half">
                    <AwardBox key={i}>{award}</AwardBox>
                  </div>
                ))}
              </div>
            )}
            {images && (
              <ImageGallery
                items={images}
                infinite={false}
                thumbnailPosition="top"
                showPlayButton={false}
                showNav={false}
                showFullscreenButton={false}
                disableArrowKeys={true}
              />
            )}
          </ResponsiveContainer>
        </section>
      </div>
    );
  }
}
