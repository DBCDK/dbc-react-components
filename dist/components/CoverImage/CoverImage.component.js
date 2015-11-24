'use strict';

/**
 * @file
 * Displays an image based on the given URL (string)
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(

'react');var _react2 = _interopRequireDefault(_react);

var CoverImage = _react2['default'].createClass({ 
  displayName: 'CoverImage', 
  propTypes: { 
    imgurl: _react2['default'].PropTypes.string.isRequired }, 


  render: function render() {
    return _react2['default'].createElement('img', { className: 'cover-image', src: this.props.imgurl });} });exports['default'] = 



CoverImage;module.exports = exports['default'];