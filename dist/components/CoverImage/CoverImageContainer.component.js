'use strict';

/**
 * @file
 * Renders a cover image based on the given pids.
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(
'react');var _react2 = _interopRequireDefault(_react);var _CoverImageComponentJs = require(
'./CoverImage.component.js');var _CoverImageComponentJs2 = _interopRequireDefault(_CoverImageComponentJs);var _CoverImageStoreJs = require(
'./CoverImage.store.js');var _CoverImageStoreJs2 = _interopRequireDefault(_CoverImageStoreJs);var _CoverImageActionJs = require(
'./CoverImage.action.js');var _CoverImageActionJs2 = _interopRequireDefault(_CoverImageActionJs);

var CoverImageContainer = _react2['default'].createClass({ 

  displayName: 'CoverImageContainer', 
  propTypes: { 
    noCoverUrl: _react2['default'].PropTypes.string, 
    pids: _react2['default'].PropTypes.array, 
    prefSize: _react2['default'].PropTypes.string.isRequired, 
    rewriteImgUrl: _react2['default'].PropTypes.func }, 


  getInitialState: function getInitialState() {
    if (this.props.noCoverUrl) {
      return { imgurl: this.props.noCoverUrl };}


    return { imgurl: '' };}, 


  componentDidMount: function componentDidMount() {
    _CoverImageStoreJs2['default'].listen(this.setImageUrl);
    var store = _CoverImageStoreJs2['default'].getState();
    this.setImageUrl(store);

    if (this.props.pids) {
      (0, _CoverImageActionJs2['default'])(this.props.pids);}}, 



  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return nextState.imgurl !== this.state.imgurl && nextState.imgurl !== '';}, 


  setImageUrl: function setImageUrl(store) {
    if (this.isMounted()) {
      var images = this.getImages(store);
      this.setState({ imgurl: this.getImageUrl(images) });}}, 



  getImages: function getImages(store) {
    return store[this.props.pids] ? store[this.props.pids] : [];}, 


  getImageUrl: function getImageUrl(images) {var _this = this;
    var imgurl = this.props.noCoverUrl || '';
    images.forEach(function (image) {
      if (image.size === _this.props.prefSize) {
        imgurl = image.url;}});



    if (this.props.rewriteImgUrl) {
      imgurl = this.props.rewriteImgUrl(imgurl);}


    return imgurl;}, 


  render: function render() {
    return _react2['default'].createElement(_CoverImageComponentJs2['default'], { imgurl: this.state.imgurl });} });exports['default'] = 



CoverImageContainer;module.exports = exports['default'];