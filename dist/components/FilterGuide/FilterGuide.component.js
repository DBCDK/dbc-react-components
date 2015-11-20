'use strict';

/**
 * @file
 * Create a List of words for filtering the searchresult
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(

'react');var _react2 = _interopRequireDefault(_react);var _FilterGuideListComponentJs = require(
'./FilterGuideList.component.js');var _FilterGuideListComponentJs2 = _interopRequireDefault(_FilterGuideListComponentJs);

var FilterGuide = _react2['default'].createClass({ 
  displayName: 'FilterGuide', 

  propTypes: { 
    categories: _react2['default'].PropTypes.array.isRequired, 
    select: _react2['default'].PropTypes.func.isRequired }, 


  render: function render() {
    return (
      _react2['default'].createElement('div', { className: 'filterguide-wrapper' }, 
      _react2['default'].createElement('div', { className: 'filterguide' }, 
      _react2['default'].createElement(_FilterGuideListComponentJs2['default'], this.props))));} });exports['default'] = 






FilterGuide;module.exports = exports['default'];