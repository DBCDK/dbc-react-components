'use strict';

/**
 * @file
 * Delivers a component representing one single category in the autocomplete
 * parent autocomplete component.
 */

import React from 'react';
import {isArray} from 'lodash';
import AutoCompleteRow from '../AutoCompleteRow/AutoCompleteRow.component.js';

var AutoCompleteCategory = React.createClass({
  displayName: 'AutoCompleteCategory',
  propTypes: {
    data: React.PropTypes.array,
    label: React.PropTypes.object
  },

  getLabel(label) {
    return (
      <div className='autocomplete--category--label-container' >
        <span className='autocomplete--category--label' >{label}</span>
      </div>
    );
  },

  render() {
    let data = this.props.data || [];
    if (!isArray(data)) {
      data = new Array(data);
    }

    const label = this.props.label || null;
    const labelToRender = (label) ? this.getLabel(label) : '';

    const rows = data.map((value, key) => {
      return (
        <AutoCompleteRow href={value.href} image={value.image} imageComp={value.imageComp} key={key} text={value.text} />
      );
    });

    return (
      <div className='autocomplete--category-container' >
        {labelToRender}
        <div className='autocomplete--category--rows-container' >
          {rows}
        </div>
      </div>
    );
  }
});

export default AutoCompleteCategory;
