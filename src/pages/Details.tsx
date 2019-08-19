import React from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import ImageGallery from 'react-image-gallery';

import { getEntity } from '../util';
import { blocks } from '../assets/data';
import { Block } from '../interfaces';
import { ScrollToTop } from '../components/ScrollToTop';
import { MetaTags } from '../components/MetaTags';
import { StickyContainer, Sticky } from 'react-sticky';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { DetailsBars } from '../components/DetailsBars';
import { AwardBox } from '../components/AwardBox';
import { Footer } from '../components/Footer';

interface UrlProps {
  id: string;
}

@(withRouter as any)
export class Details extends React.PureComponent<RouteComponentProps<UrlProps>> {
  render() {
    const { id } = this.props.match.params;

    const blockNames: string[] = blocks.map(block => block.name);
    if (blockNames.concat(['education', 'skills']).includes(id))
      return <Redirect to={'/resume/' + id} />;

    const entity = getEntity(id.toLowerCase());
    if (!entity || !blockNames.includes(entity.type)) return <Redirect to="/404" />;

    const {
      name,
      tagline,
      extra,
      description,
      info,
      awards,
      moreAwards,
      images,
    } = entity.data as Block;
    return (
      <div>
        <ScrollToTop />
        <MetaTags
          name={entity.type.charAt(0).toUpperCase() + entity.type.slice(1) + ' - ' + name}
          description={tagline || `Learn about this and other ${entity.type}`}
        />
        <StickyContainer>
          <section className="hero is-black">
            <div className="hero-head">
              <Sticky>
                {({ style, isSticky }) => (
                  <div className={classNames({ 'sticky-header': isSticky })} style={style}>
                    <Navbar />
                  </div>
                )}
              </Sticky>
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
              {(awards || moreAwards) && (
                <div className="columns is-multiline is-centered is-variable is-2">
                  {awards &&
                    awards.map((award, i) => (
                      <div key={i} className="column is-half">
                        <AwardBox>{award}</AwardBox>
                      </div>
                    ))}
                  {moreAwards &&
                    moreAwards.map((award, i) => (
                      <div key={i} className="column is-half">
                        <AwardBox color="success" icon="fas fa-crown">
                          {award}
                        </AwardBox>
                      </div>
                    ))}
                </div>
              )}
              {images && (
                <ImageGallery
                  items={images}
                  infinite={false}
                  showPlayButton={false}
                  showNav={false}
                  showFullscreenButton={false}
                  disableArrowKeys={true}
                />
              )}
            </ResponsiveContainer>
          </section>
        </StickyContainer>
        <Footer />
      </div>
    );
  }
}
