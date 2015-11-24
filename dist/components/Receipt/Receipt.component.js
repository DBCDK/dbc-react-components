'use strict';
/**
 * @file
 * Currently the main entrypoint served on /receipt.
 * Provides the order receipt for the enduser.
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(
'react');var _react2 = _interopRequireDefault(_react);var _ReceiptActionJs = require(

'./Receipt.action.js');var _ReceiptActionJs2 = _interopRequireDefault(_ReceiptActionJs);var _ReceiptStoreJs = require(
'./Receipt.store.js');var _ReceiptStoreJs2 = _interopRequireDefault(_ReceiptStoreJs);

var Receipt = _react2['default'].createClass({ 

  displayName: 'Receipt', 

  propTypes: { 
    receipt: _react2['default'].PropTypes.object.isRequired }, 


  getInitialState: function getInitialState() {
    return { 
      orderPlaced: false, 
      headline: '', 
      libraryInfo: '', 
      orderInfo: '' };}, 



  componentDidMount: function componentDidMount() {
    _ReceiptStoreJs2['default'].listen(this.setOrderPlaced);
    (0, _ReceiptActionJs2['default'])({ agencyId: this.props.receipt.pickupAgency, pids: this.props.receipt.ids, userId: this.props.receipt.borrowerId });}, 


  setOrderPlaced: function setOrderPlaced(store) {
    var title = this.props.receipt.title;
    var creator = this.props.receipt.creator;
    var type = this.props.receipt.type;
    var ids = this.props.receipt.ids.split(',');

    var orderInfo = title + ' (' + type + ')';

    if (creator !== '') {
      orderInfo = creator + ': ' + title + ' (' + type + ')';}


    var backLink = 'work?id=' + ids[0];

    if (store[this.props.receipt.ids.toString()] === true) {
      this.setState({ 
        orderPlaced: true, 
        headline: 'Vi har modtaget din bestilling på:', 
        orderInfo: orderInfo, 
        libraryInfo: 'Du vil få besked fra dit bibliotek (' + this.props.receipt.pickupAgency + '), når materialet er klar til afhentning.', 
        backLink: _react2['default'].createElement('a', { className: 'back-button button', href: backLink }, 'Afslut') });} else 


    {
      this.setState({ 
        orderPlaced: false, 
        headline: 'Bestilling af følgende materiale mislykkedes:', 
        orderInfo: orderInfo, 
        libraryInfo: '', 
        backLink: _react2['default'].createElement('a', { className: 'back-button button', href: backLink }, 'Gå tilbage') });}}, 




  render: function render() {
    return _react2['default'].createElement('div', { className: 'receipt--container' }, 
    _react2['default'].createElement('div', { className: 'receipt small-12 medium-6 large-4' }, 
    _react2['default'].createElement('div', { className: 'receipt--info' }, 
    _react2['default'].createElement('div', { className: 'receipt--headline' }, this.state.headline), 
    _react2['default'].createElement('div', { className: 'receipt--bibliographic' }, this.state.orderInfo), 
    _react2['default'].createElement('div', { className: 'receipt--library' }, this.state.libraryInfo), 
    _react2['default'].createElement('div', { className: 'receipt--back-link' }, this.state.backLink))));} });exports['default'] = 







Receipt;module.exports = exports['default'];