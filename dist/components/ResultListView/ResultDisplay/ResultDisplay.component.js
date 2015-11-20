'use strict';

/**
 * @file
 * Component that renders a result display.
 * The layout of the result display can be optional provided through the layout props.
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(

'react');var _react2 = _interopRequireDefault(_react);var _LoadMoreComponentJs = require(
'./LoadMore.component.js');var _LoadMoreComponentJs2 = _interopRequireDefault(_LoadMoreComponentJs);var _DisplayBibliographicDataDisplayBibliographicDataComponentJs = require(
'./../DisplayBibliographicData/DisplayBibliographicData.component.js');var _DisplayBibliographicDataDisplayBibliographicDataComponentJs2 = _interopRequireDefault(_DisplayBibliographicDataDisplayBibliographicDataComponentJs);var _ResultDisplayStandardLayoutComponent = require(

'./ResultDisplayStandardLayout.component');var _ResultDisplayStandardLayoutComponent2 = _interopRequireDefault(_ResultDisplayStandardLayoutComponent);

/**
 * Main component for presenting search result
 */
var ResultDisplay = _react2['default'].createClass({ 
  displayName: 'ResultDisplay', 

  propTypes: { 
    coverImage: _react2['default'].PropTypes.object, 
    hasMore: _react2['default'].PropTypes.bool, 
    layout: _react2['default'].PropTypes.func, 
    loadMore: _react2['default'].PropTypes.func, 
    loader: _react2['default'].PropTypes.element, 
    pending: _react2['default'].PropTypes.bool, 
    result: _react2['default'].PropTypes.array.isRequired }, 


  render: function render() {var _this = this;var _props = 
    this.props;var loader = _props.loader;var pending = _props.pending;var result = _props.result;var hasMore = _props.hasMore;var loadMore = _props.loadMore;
    var loadMoreButton = hasMore && !pending ? _react2['default'].createElement(_LoadMoreComponentJs2['default'], { button: 'Se flere', update: loadMore }) : null;

    var workElement = result.map(function (work, i) {
      return (
        _react2['default'].createElement(_DisplayBibliographicDataDisplayBibliographicDataComponentJs2['default'], { 
          coverImage: _this.props.coverImage, 
          creator: work.creator, 
          identifiers: work.identifiers, 
          key: i, 
          title: work.title, 
          workType: work.workType }));});



    var Layout = this.props.layout || _ResultDisplayStandardLayoutComponent2['default'];

    return (
      _react2['default'].createElement(Layout, { loadMoreButton: loadMoreButton, loader: loader, workElement: workElement }));} });exports['default'] = 




ResultDisplay;module.exports = exports['default'];