import React from 'react';
import classNames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Navbar, ScrollToTop, MetaTags, Footer } from '../../base';
import { ImageLayout } from '../components';
import { getData } from '../../data';
import { filterPhotos, enumPhotos, writeGalleryView, userHasSeenPhoto } from '../util';

interface State {
  filterTags: string[];
}

@(withRouter as any)
export class Gallery extends React.PureComponent<RouteComponentProps<{ tag: string }>, State> {
  state: Readonly<State> = {
    filterTags: [],
  };

  photos = getData().gallery || [];

  allTags: string[] = Array.from(
    new Set(
      this.photos
        .map((imageView) => (imageView.image.tags || []).map((tag) => tag.toLowerCase()))
        .flat()
    )
  );

  componentDidMount() {
    const tag = this.props.match.params.tag;
    if (tag && this.allTags.includes(tag)) this.toggleFilterTag(tag);
  }

  componentWillUnmount() {
    writeGalleryView();
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
    const filteredPhotos = filterPhotos(this.photos, filterTags).sort(
      (a, b) => +userHasSeenPhoto(a.image.title!) - +userHasSeenPhoto(b.image.title!)
    );

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
