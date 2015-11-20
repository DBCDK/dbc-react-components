'use strict';

/**
 * @file
 * Renders the single row in the parent autocomplete component.
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(

'react');var _react2 = _interopRequireDefault(_react);

var AutoCompleteRow = _react2['default'].createClass({ 
  displayName: 'AutoCompleteRow', 
  propTypes: { 
    href: _react2['default'].PropTypes.string, 
    image: _react2['default'].PropTypes.string, 
    imageComp: _react2['default'].PropTypes.element, 
    text: _react2['default'].PropTypes.string }, 


  getImage: function getImage() {
    var img = null;
    if (this.props.imageComp) {
      img = _react2['default'].createElement('div', { className: 'autocomplete--row-image' }, this.props.imageComp);} else 

    if (this.props.image || true) {
      img = 
      _react2['default'].createElement('div', { className: 'autocomplete--row-image' }, _react2['default'].createElement('img', { src: this.props.image }));}




    return img;}, 


  render: function render() {
    var text = this.props.text || '';
    var imageElement = this.getImage();
    var href = this.props.href || '#';

    return (
      _react2['default'].createElement('div', { className: 'autocomplete--row' }, 
      _react2['default'].createElement('a', { href: href }, 
      imageElement, 
      _react2['default'].createElement('div', { className: 'autocomplete--row-text' }, text))));} });exports['default'] = 






AutoCompleteRow;module.exports = exports['default'];