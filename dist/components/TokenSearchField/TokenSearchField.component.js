'use strict';

/**
 * @file
 * Main component for showing searchstring as buttons
 *
 * Properties:
 * query: an array of query elements. Only supports string elements for now.
 * change optional callback function for when the input field is updated
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(

'react');var _react2 = _interopRequireDefault(_react);var _reactDom = require(
'react-dom');var _reactDom2 = _interopRequireDefault(_reactDom);var _lodash = require(
'lodash');var _lodash2 = _interopRequireDefault(_lodash);var _TokenListTokenListComponentJs = require(
'../TokenList/TokenList.component.js');var _TokenListTokenListComponentJs2 = _interopRequireDefault(_TokenListTokenListComponentJs);var _utilsQueryStringUtilJs = require(
'../../utils/QueryString.util.js');

var SearchField = _react2['default'].createClass({ 
  displayName: 'TokenSearchField.component', 
  propTypes: { 
    change: _react.PropTypes.func, 
    focus: _react.PropTypes.func, 
    pending: _react.PropTypes.bool, 
    placeholder: _react.PropTypes.string, 
    query: _react.PropTypes.array.isRequired, 
    translations: _react.PropTypes.object, 
    update: _react.PropTypes.func.isRequired }, 


  getInitialState: function getInitialState() {
    return { 
      value: '', 
      hasFocus: false, 
      text: this.getQueryTexts() };}, 



  componentDidMount: function componentDidMount() {var _this = this;
    this.hasScrolled = false;
    if (window) {
      window.addEventListener('touchmove', function () {
        if (!_this.hasScrolled) {
          _this.hasScrolled = true;
          _this.onBlur();}});}}, 





  hasScrolled: false, 

  removeElement: function removeElement(element) {
    var query = _lodash2['default'].remove(this.props.query, function (queryObject) {return queryObject !== element;});
    var text = query.map(function (e) {return e.value;}).join(' ');
    this.props.update(query);
    this.setState({ text: text });}, 


  onSubmit: function onSubmit(event) {
    // make sure form is not submitted, it is handled with js
    // @todo implement fallback for when js is failing
    event.preventDefault();

    // removing focus from the textfield
    this.onBlur();
    var focus = false;
    this.props.focus(focus);

    // update query with the updated text string
    var text = this.state.text && this.state.text.trim() || '';
    var query = (0, _utilsQueryStringUtilJs.updateQueryFromString)(text, this.props.query);

    // Send updated query to parent component
    this.props.update(query);

    // Update local state: remove focus and empty textfield
    this.setState({ 
      text: '', 
      hasFocus: focus });}, 



  getQueryTexts: function getQueryTexts() {
    return this.props.query.map(function (element) {return element.value;}).join(' ');}, 


  setFocus: function setFocus(state) {
    this.hasScrolled = false;
    var text = state && this.getQueryTexts() || this.state.text;
    this.props.focus(state); // mismatch between this and the below hasFocus value
    this.setState({ hasFocus: state, text: text });}, 


  onBlur: function onBlur() {
    _reactDom2['default'].findDOMNode(this.refs.searchfield).blur();}, 


  onChange: function onChange(event) {
    var text = event.target.value;
    if (!this.state.hasFocus) {
      text = this.getQueryTexts() + ' ' + text;}

    this.setState({ text: text });
    if (this.props.change) {
      this.props.change(event.target.value);}}, 



  onKey: function onKey(event) {
    if (event.key && event.key === 'Escape') {
      this.onBlur();
      this.setFocus(false);}}, 



  render: function render() {var _state = 
    this.state;var hasFocus = _state.hasFocus;var text = _state.text;var _props = 
    this.props;var query = _props.query;var pending = _props.pending;
    var tokenClasses = !hasFocus && 'tokens-wrapper' || 'tokens-wrapper hide';
    var spinnerClass = pending ? 'token-searchfield--spinner pending' : 'token-searchfield--spinner';

    return (
      _react2['default'].createElement('div', { className: 'token-searchfield', onKeyUp: this.onKey }, 
      _react2['default'].createElement('form', { onSubmit: this.onSubmit }, 
      _react2['default'].createElement('div', { className: 'row' }, 
      _react2['default'].createElement('div', { className: 'large-24 columns' }, 
      _react2['default'].createElement('div', { className: 'row collapse' }, 
      _react2['default'].createElement('div', { className: 'small-20 columns' }, 
      _react2['default'].createElement('div', { className: 'tokens' }, 
      _react2['default'].createElement('div', { className: tokenClasses }, 
      _react2['default'].createElement(_TokenListTokenListComponentJs2['default'], { query: query, remove: this.removeElement, translations: this.props.translations }))), 


      _react2['default'].createElement('input', { className: 'searchfield', 
        onChange: this.onChange, 
        onClick: this.setFocus.bind(this, true), 
        onFocus: this.setFocus.bind(this, true), 
        placeholder: this.props.placeholder, 
        ref: 'searchfield', 
        type: 'text', 
        value: text || '' }), 

      _react2['default'].createElement('span', { className: '' + spinnerClass })), 

      _react2['default'].createElement('div', { className: 'small-4 columns' }, 
      _react2['default'].createElement('input', { className: 'button postfix', onClick: this.onSubmit, type: 'submit', value: 'Søg' }))))))));} });exports['default'] = 










SearchField;module.exports = exports['default'];