'use strict';

/**
 * @file
 * Main component for showing searchstring as buttons
 *
 * Properties:
 * query: an array of query elements. Only supports string elements for now.
 * change optional callback function for when the input field is updated
 */

import React, {PropTypes} from 'react';
import _ from 'lodash';
import TokenList from '../TokenList/TokenList.component.js';
import {updateQueryFromString} from '../../utils/QueryString.util';

const SearchField = React.createClass({
  propTypes: {
    query: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
    change: PropTypes.func,
    placeholder: React.PropTypes.string
  },

  getInitialState() {
    return {
      value: '',
      hasFocus: false,
      text: this.getQueryTexts()
    };
  },

  removeElement(element) {
    let query = _.remove(this.props.query, (queryObject)=> queryObject !== element);
    this.props.update(query);
  },

  onSubmit(event) {
    // make sure form is not submitted, it is handled with js
    // @todo implement fallback for when js is failing
    event.preventDefault();
    // update query with the updated text string
    let text = this.state.text && this.state.text.trim() || '';
    let query = updateQueryFromString(text, this.props.query);
    // Send updated query to parent component
    this.props.update(query);
    // Update local state: remove focus and empty textfield
    this.setState({
      text: '',
      hasFocus: false
    });
  },

  getQueryTexts() {
    return this.props.query.map((element)=> element.value).join(' ');
  },

  setFocus(state) {
    if (this.props.focus) {
      this.props.focus(state);
    }
    let text = state && this.getQueryTexts() || this.state.text;
    this.setState({hasFocus: state, text});
  },

  onChange(event) {
    let text = event.target.value;
    if (!this.state.hasFocus) {
      text = this.getQueryTexts() + ' ' + text;
    }
    this.setState({text});
    if (this.props.change) {
      this.props.change(event.target.value);
    }
  },

  render() {
    const {hasFocus, text} = this.state;
    const {query} = this.props;
    const tokenClasses = !hasFocus && 'tokens-wrapper' || 'tokens-wrapper hide';
    return (
      <div className='token-searchfield' >
        <form onSubmit={this.onSubmit} >
          <ul className='searchfield-wrapper' >
            <li className='tokens' >
              <div className={tokenClasses} >
                <TokenList query={query} remove={this.removeElement} />
              </div>
            </li>
            <li className='inputfield' >
              <input type='text'
                     className='searchfield'
                     onChange={this.onChange}
                     onFocus={this.setFocus.bind(this, true)}
                     onBlur={this.setFocus.bind(this, false)}
                     onClick={this.setFocus.bind(this, true)}
                     value={text || ''}
                     placeholder={this.props.placeholder}
                />
            </li>
            <li className='token-searchfield--spinner'></li>
            <li className='submit' >
              <input onClick={this.onSubmit} className='button small' type='submit' value='søg' />
            </li>
          </ul>
        </form>
      </div>
    );
  }
});

export default SearchField;


