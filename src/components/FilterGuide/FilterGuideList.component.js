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
    categories: React.PropTypes.array.isRequired,
    elements: React.PropTypes.array.isRequired,
    select: React.PropTypes.func.isRequired
  },

  render() {
    const {select, elements, categories} = this.props;
    const listItems = elements.map((element, i) => (
        <FilterGuideListElement element={element} key={i} select={select} />
      )
    );
    const categoryItems = categories.map((category, i) => (
        <FilterGuideListElement element={category} key={i} select={select} />
      )
    );

    return (
      <ul className='filterguide-list'>
        {categoryItems}
        {listItems}
      </ul>
    );
  }
});

export default FilterGuideList;
