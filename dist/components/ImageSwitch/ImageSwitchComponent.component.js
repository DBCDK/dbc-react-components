'use strict';

/**
 * @file
 * Simple component that displays one of two images based on the given isToggled property
 */
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ImageSwitchComponent = _react2['default'].createClass({
  displayName: 'ImageSwitchComponent',

  propTypes: {
    isToggled: _react2['default'].PropTypes.bool,
    offStateImg: _react2['default'].PropTypes.string.isRequired,
    onStateImg: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var imageUrl = this.props.isToggled ? this.props.onStateImg : this.props.offStateImg;
    return _react2['default'].createElement('img', { className: 'image-switch-container', src: imageUrl });
  }
});

exports['default'] = ImageSwitchComponent;
module.exports = exports['default'];