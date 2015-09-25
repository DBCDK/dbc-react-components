'use strict';
import React from 'react';
import LoadMore from './LoadMore.component.js';
import BibliographicData from './../DisplayBibliographicData/DisplayBibliographicData.component.js';

/**
 * Main component for presenting search result
 */
const ResultDisplay = React.createClass({
  displayName: 'ResultDisplay.component',

  propTypes: {
    coverImage: React.PropTypes.object,
    hasMore: React.PropTypes.bool,
    loadMore: React.PropTypes.func,
    loader: React.PropTypes.element,
    pending: React.PropTypes.bool,
    result: React.PropTypes.array.isRequired
  },

  render() {
    const {loader, pending, result, hasMore, loadMore} = this.props;
    const loadMoreButton = (hasMore && !pending) &&
      <LoadMore button={'Se flere'} update={loadMore} />;

    const workElement = result.map((work, i) => {
      return (
        <BibliographicData
          coverImage={this.props.coverImage}
          creator={work.creator}
          identifiers={work.identifiers}
          key={i}
          title={work.title}
          workType={work.workType}
          />);
    });

    return (
      <div className='container' >
        <div className='row'>
          <ul className='small-block-grid-2 medium-block-grid-3 large-block-grid-4'>
            {workElement}
          </ul>
          {loader}
          {loadMoreButton}
        </div>
      </div>);
  }
});

export default ResultDisplay;
