import React from 'react';
import classNames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Navbar, ScrollToTop, MetaTags, Footer } from '../../base';
import { ImageLayout } from '../components';
import { getData } from '../../data';
import { flattenPhotos, filterPhotos, enumPhotos, getGallerySize } from '../util';
import { MultiGroup } from '../interfaces';

interface State {
  filterTags: string[];
}

@(withRouter as any)
export class Gallery extends React.PureComponent<RouteComponentProps<{ tag: string }>, State> {
  state: Readonly<State> = {
    filterTags: [],
  };

  photos = getData().photos ? getData().photos!.gallery : [];

  allTags: string[] = Array.from(
    new Set(
      flattenPhotos(this.photos)
        .map((image) => (image.tags || []).map((tag) => tag.toLowerCase()))
        .flat()
    )
  );

  componentDidMount() {
    localStorage.setItem('gallery_count', getGallerySize().toString());

    const tag = this.props.match.params.tag;
    if (tag && this.allTags.includes(tag)) this.toggleFilterTag(tag);
  }

  toggleFilterTag = (tag: string) =>
    this.setState(({ filterTags }) => {
      const matchIndex = filterTags.indexOf(tag);
      let newFilterTags;
      if (matchIndex === -1) newFilterTags = filterTags.concat(tag);
      else newFilterTags = filterTags.filter((filterTag) => filterTag !== tag);
      return { filterTags: newFilterTags };
    });
  clearFilterTags = () => this.setState({ filterTags: [] });

  render() {
    const { filterTags } = this.state;
    const filteredPhotos =
      filterTags.length > 0
        ? [
            {
              type: 'multi',
              images: filterPhotos(this.photos, filterTags),
              wide: true,
            } as MultiGroup,
          ]
        : this.photos;

    return (
      <div>
        <ScrollToTop />
        <MetaTags name="Gallery" description="My photography, a visual diary" />
        <section className="hero is-black">
          <div className="hero-head">
            <Navbar color="black" showMenu={false} />
          </div>
          <div className="hero-body">
            <div className="container">
              <span className="fancy has-text-centered">
                <h3 className="title gradientbg">Photo Gallery</h3>
                <h5 className="subtitle has-text-grey-light">
                  <span className="icon animated flash">
                    <i className="fas fa-camera" />
                  </span>
                  <span> My visual diary</span>
                </h5>
              </span>
              <div className="filter-tags tags is-pulled-right">
                {filterTags.length > 0 && (
                  <button
                    className="tag is-black delete animated faster fadeInRight"
                    onClick={this.clearFilterTags}></button>
                )}
                {this.allTags.map((tag) => (
                  <a
                    key={tag}
                    className={classNames('tag', filterTags.includes(tag) ? 'is-light' : 'is-dark')}
                    onClick={() => this.toggleFilterTag(tag)}>
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ImageLayout collection={enumPhotos(filteredPhotos)} />
        <br />
        <Footer />
      </div>
    );
  }
}
