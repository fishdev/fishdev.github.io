import React from 'react';
import classNames from 'classnames';

import { Navbar, ScrollToTop, MetaTags, Footer } from '../../core';
import { ImageLayout } from '../components';
import { photos } from '../../assets/data';
import { flattenPhotos, filterPhotos, enumPhotos } from '../util';
import { MultiGroup } from '../interfaces';

interface State {
  filterTags: string[];
}

export class Gallery extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    filterTags: [],
  };

  allTags: string[] = Array.from(
    new Set(
      flattenPhotos(photos)
        .map((image) => (image.tags || []).map((tag) => tag.toLowerCase()))
        .flat()
    )
  );

  componentDidMount() {
    localStorage.setItem('galleryVisited', 'true');
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
        ? [{ type: 'multi', images: filterPhotos(photos, filterTags), wide: true } as MultiGroup]
        : photos;

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
                  <a
                    className="tag is-black delete animated faster fadeInRight"
                    onClick={this.clearFilterTags}></a>
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
        <ImageLayout data={enumPhotos(filteredPhotos)} />
        <br />
        <Footer />
      </div>
    );
  }
}
