'use strict';Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(
'react');var _react2 = _interopRequireDefault(_react);

/**
 * Component for creating presentation of bibliographic data
 */

function _getIcon(worktype) {

  var icon = new Array('fa');

  switch (worktype) {
    case 'article':
      icon.push('fa-file-text');
      break;
    case 'book':
      icon.push('fa-book');
      break;
    case 'audiobook':
      icon.push('fa-book');
      break;
    case 'game':
      icon.push('fa-gamepad');
      break;
    case 'movie':
      icon.push('fa-film');
      break;
    case 'music':
      icon.push('fa-music');
      break;
    case 'periodica':
      icon.push('fa-newspaper-o');
      break;
    default:
      icon.push('fa-question');
      break;}


  return icon;}



var BibliographicData = _react2['default'].createClass({ 
  displayName: 'BibliographicData.component', 

  propTypes: { 
    coverImage: _react2['default'].PropTypes.object, 
    creator: _react2['default'].PropTypes.string, 
    identifiers: _react2['default'].PropTypes.array.isRequired, 
    title: _react2['default'].PropTypes.string, 
    workType: _react2['default'].PropTypes.string }, 


  getCoverComponent: function getCoverComponent(pids, workType) {
    var CoverImage = null;

    if (!workType) {
      workType = 'other';}


    if (this.props.coverImage) {
      var CoverComponent = this.props.coverImage.component;
      var noCoverUrl = this.props.coverImage.noCoverUrl.url;

      if (this.props.coverImage.noCoverUrl && this.props.coverImage.noCoverUrl.appendWorkType) {
        noCoverUrl = this.rewriteCoverImageUrl(this.props.coverImage.noCoverUrl.url, workType);}


      CoverImage = 
      _react2['default'].createElement(CoverComponent, { noCoverUrl: noCoverUrl, pids: pids, prefSize: this.props.coverImage.prefSize, rewriteImgUrl: this.props.coverImage.rewriteImgUrl });}



    return CoverImage;}, 


  rewriteCoverImageUrl: function rewriteCoverImageUrl(url, workType) {
    return url.replace('[WORKTYPE]', workType);}, 


  render: function render() {var _props = 
    this.props;var title = _props.title;var creator = _props.creator;var workType = _props.workType;var identifiers = _props.identifiers;
    var icon = _getIcon(workType);
    var pids = identifiers;
    var firstPid = pids[0];
    var workid = 'id-' + firstPid;
    var worklink = '/work?id=' + firstPid;
    var CoverComponent = this.getCoverComponent(pids, workType);

    return (
      _react2['default'].createElement('li', { 'data-work-id': firstPid }, 
      _react2['default'].createElement('div', { className: 'work', 'data-work-id': firstPid, id: workid }, 
      _react2['default'].createElement('a', { className: 'image-see-work', href: worklink }, 
      _react2['default'].createElement('i', { className: icon.join(' ') }), 
      CoverComponent, 
      _react2['default'].createElement('div', { className: 'title' }, title), 
      _react2['default'].createElement('div', { className: 'creator' }, creator)))));} });exports['default'] = 






BibliographicData;module.exports = exports['default'];