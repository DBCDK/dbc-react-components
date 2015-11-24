'use strict';

/**
 * @file
 * Delivers a component representing one single category in the autocomplete
 * parent autocomplete component.
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(

'react');var _react2 = _interopRequireDefault(_react);var _lodash = require(
'lodash');var _AutoCompleteRowAutoCompleteRowComponentJs = require(
'../AutoCompleteRow/AutoCompleteRow.component.js');var _AutoCompleteRowAutoCompleteRowComponentJs2 = _interopRequireDefault(_AutoCompleteRowAutoCompleteRowComponentJs);

var AutoCompleteCategory = _react2['default'].createClass({ 
  displayName: 'AutoCompleteCategory', 
  propTypes: { 
    data: _react2['default'].PropTypes.array, 
    label: _react2['default'].PropTypes.object }, 


  getLabel: function getLabel(label) {
    return (
      _react2['default'].createElement('div', { className: 'autocomplete--category--label-container' }, 
      _react2['default'].createElement('span', { className: 'autocomplete--category--label' }, label)));}, 




  render: function render() {
    var data = this.props.data || [];
    if (!(0, _lodash.isArray)(data)) {
      data = new Array(data);}


    var label = this.props.label || null;
    var labelToRender = label ? this.getLabel(label) : '';

    var rows = data.map(function (value, key) {
      return (
        _react2['default'].createElement(_AutoCompleteRowAutoCompleteRowComponentJs2['default'], { href: value.href, image: value.image, imageComp: value.imageComp, key: key, text: value.text }));});



    return (
      _react2['default'].createElement('div', { className: 'autocomplete--category-container' }, 
      labelToRender, 
      _react2['default'].createElement('div', { className: 'autocomplete--category--rows-container' }, 
      rows)));} });exports['default'] = 






AutoCompleteCategory;module.exports = exports['default'];