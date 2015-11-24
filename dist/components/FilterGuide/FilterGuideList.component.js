'use strict';

/**
 * @file
 * Render an array of words as a scrollable list
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(


'react');var _react2 = _interopRequireDefault(_react);var _FilterGuideListElementComponentJs = require(
'./FilterGuideListElement.component.js');var _FilterGuideListElementComponentJs2 = _interopRequireDefault(_FilterGuideListElementComponentJs);

var FilterGuideList = _react2['default'].createClass({ 
  displayName: 'FilterGuideList', 

  propTypes: { 
    categories: _react2['default'].PropTypes.array.isRequired, 
    select: _react2['default'].PropTypes.func.isRequired }, 


  render: function render() {var _props = 
    this.props;var select = _props.select;var categories = _props.categories;

    var categoryItems = categories.map(function (category, i) {return (
        _react2['default'].createElement(_FilterGuideListElementComponentJs2['default'], { element: category, key: i, select: select }));});



    return (
      _react2['default'].createElement('ul', { className: 'filterguide-list' }, 
      categoryItems));} });exports['default'] = 





FilterGuideList;module.exports = exports['default'];