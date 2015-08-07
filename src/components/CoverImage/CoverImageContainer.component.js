'use strict';

/**
 * @file
 * Renders a cover image based on the given pids.
 */
import React from 'react';
import CoverImage from './CoverImage.component.js';
import CoverImageStore from './CoverImage.store.js';
import CoverImageActions from './CoverImage.action.js';

const CoverImageContainer = React.createClass({

  displayName: 'CoverImageContainer',
  propTypes: {
    noCoverUrl: React.PropTypes.string,
    pids: React.PropTypes.array.isRequired,
    prefSize: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {imgurl: ''};
  },

  componentDidMount() {
    CoverImageStore.listen(this.setImageUrl);
    const store = CoverImageStore.getState();
    this.setImageUrl(store);

    CoverImageActions(this.props.pids);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.imgurl !== this.state.imgurl && nextState.imgurl !== '');
  },

  setImageUrl(store) {
    const images = this.getImages(store);
    this.setState({imgurl: this.getImageUrl(images)});
  },

  getImages(store) {
    return store[this.props.pids] ? store[this.props.pids] : [];
  },

  getImageUrl(images) {
    let imgurl = '';
    images.forEach((image) => {
      if (image.size === this.props.prefSize) {
        imgurl = image.url;
      }
    });
    return imgurl;
  },

  render() {
    return <CoverImage imgurl={this.state.imgurl} />;
  }
});

export default CoverImageContainer;
