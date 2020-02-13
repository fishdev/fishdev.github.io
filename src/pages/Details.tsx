import React from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';

import { getEntity } from '../util';
import { blocks } from '../assets/data';
import { Block } from '../interfaces';
import { ScrollToTop } from '../components/ScrollToTop';
import { MetaTags } from '../components/MetaTags';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { DetailsBars } from '../components/DetailsBars';
import { AwardBox } from '../components/AwardBox';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ImageBox } from '../components/ImageBox';

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
          <div className="hero is-black">
            <div className="hero-head">
              <Navbar color="black" showMenu={false} />
            </div>
            <div className="hero-body">
              <ResponsiveContainer size="huge">
                <div className="columns">
                  <div className="column is-3 is-4-desktop fancy">
                    <h3 className="title is-3 gradientbg">{name}</h3>
                    {tagline && <h4 className="subtitle is-4 gradientbg">{tagline}</h4>}
                    {extra && <h4 className="subtitle is-4 gradientbg">{extra}</h4>}
                    <DetailsBars {...entity} />
                  </div>
                  <div className="column">
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
                    <div className="columns is-mobile" style={{ overflowY: 'scroll' }}>
                      {images &&
                        images.map((image, i) => (
                          <div key={i} className="column is-narrow has-text-centered">
                            <ImageBox {...image} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </ResponsiveContainer>
            </div>
          </div>
        </StickyContainer>
        <Footer />
      </div>
    );
  }
}
