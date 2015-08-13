'use strict';

/**
 * @file
 * Render an array of words as a scrollable list
 */


import React from 'react';
import FilterGuideListElement from './FilterGuideListElement.component.js';

const FilterGuideList = React.createClass({
  displayName: 'FilterGuideList',

  propTypes: {
    elements: React.PropTypes.array.isRequired,
    select: React.PropTypes.func.isRequired
  },

  render() {
    const {select, elements} = this.props;
    const listItems = elements.map((element, i) => (
        <FilterGuideListElement element={element} key={i} select={select} />
      )
    );

    return (
      <ul className='filterguide-list'>
        {listItems}
      </ul>
    );
  }
});

export default FilterGuideList;
