'use strict';

/**
 * @file
 * Render an element for a Filterguide list
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(

'react');var _react2 = _interopRequireDefault(_react);

var FilterGuideListElement = _react2['default'].createClass({ 
  displayName: 'FilterGuideListElement', 

  propTypes: { 
    element: _react2['default'].PropTypes.object.isRequired, 
    select: _react2['default'].PropTypes.func.isRequired }, 


  onClick: function onClick(element, event) {
    event.preventDefault();
    this.props.select(element);}, 


  render: function render() {var 
    element = this.props.element;
    var cssClassname = element.cssClass ? 'element-label-' + element.cssClass + ' ' : '';
    cssClassname += 'element-label button';
    return (
      _react2['default'].createElement('li', { className: 'filterguide-list-element' }, 
      _react2['default'].createElement('a', { className: cssClassname, href: '#', onClick: this.onClick.bind(null, element) }, element.displayValue || element.value)));} });exports['default'] = 





FilterGuideListElement;module.exports = exports['default'];