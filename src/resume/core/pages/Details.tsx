import React from 'react';
import classNames from 'classnames';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';

import { getEntity } from '../util';
import { blocks } from '../../../assets/data';
import { Block } from '../interfaces';
import {
  MetaTags,
  ScrollToTop,
  ImageBox,
  Footer,
  Navbar,
  ResponsiveContainer,
} from '../../../core';
import { AwardBox, DetailsBars } from '../components';

interface UrlProps {
  id: string;
}

@(withRouter as any)
export class Details extends React.PureComponent<RouteComponentProps<UrlProps>> {
  render() {
    const { id } = this.props.match.params;

    const blockNames: string[] = blocks.map((block) => block.name);
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
                    <Sticky topOffset={500}>
                      {({ style, isSticky }) => (
                        <div
                          style={style}
                          className={classNames({ 'section-label-sticky': isSticky })}>
                          <h3 className="title is-3 gradientbg">{name}</h3>
                          {tagline && <h4 className="subtitle is-4 gradientbg">{tagline}</h4>}
                          {extra && <h4 className="subtitle is-4 gradientbg">{extra}</h4>}
                        </div>
                      )}
                    </Sticky>
                    <br />
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
                            <ImageBox data={image} />
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
