'use strict';

/**
 * @file Main autocomplete component
 */

import React from 'react';
import {forIn} from 'lodash';
import AutoCompleteCategory from './../AutoCompleteCategory/AutoCompleteCategory.component.js';

const AutoComplete = React.createClass({
  displayName: 'AutoComplete',
  propTypes: {
    data: React.PropTypes.object,
    visible: React.PropTypes.bool
  },

  /*
   * Retrieves the categories from the data prop and renders a
   * AutoCompleteCategory for each category.
   *
   * @return {Array}
   */
  getCategories() {
    let categories = [];
    const data = this.props.data || {};

    forIn(data, (value, key) => {
      categories.splice(value.weight, 0,
        <AutoCompleteCategory data={value.data} key={key} label={value.label} />);
    });

    return categories;
  },

  render() {
    const categories = this.getCategories();
    let classNames = 'autocomplete--container';
    classNames += this.props.visible === true ? '' : ' autocomplete--container-hidden';

    return (
      <div className={classNames} >
        {categories}
      </div>
    );
  }
});

export default AutoComplete;
