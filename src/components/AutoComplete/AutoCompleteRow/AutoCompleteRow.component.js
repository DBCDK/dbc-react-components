'use strict';

/**
 * @file
 * Renders the single row in the parent autocomplete component.
 */

import React from 'react';

var AutoCompleteRow = React.createClass({
  displayName: 'AutoCompleteRow',
  propTypes: {
    href: React.PropTypes.string,
    image: React.PropTypes.string,
    pid: React.PropTypes.string,
    text: React.PropTypes.string
  },

  getImage(image) {
    return (
      <div className='autocomplete--row-image' ><img src={image} /></div>
    );
  },

  render() {
    const text = this.props.text || '';
    const image = this.props.image || null;
    const href = this.props.href || '#';
    const imageElement = (image) ? this.getImage(image) : null;

    return (
      <div className='autocomplete--row' >
        <a href={href} >
          {imageElement}
          <div className='autocomplete--row-text' >{text}</div>
        </a>
      </div>
    );
  }
});

export default AutoCompleteRow;
