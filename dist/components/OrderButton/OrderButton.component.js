'use strict';
/**
 * @file
 * Provides an order button/online link rendering.
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(
'react');var _react2 = _interopRequireDefault(_react);var _lodash = require(

'lodash');var _OrderLinkOrderLinkComponentJs = require(

'../OrderLink/OrderLink.component.js');var _OrderLinkOrderLinkComponentJs2 = _interopRequireDefault(_OrderLinkOrderLinkComponentJs);

var OrderButton = _react2['default'].createClass({ 
  displayName: 'OrderButton', 

  propTypes: { 
    favoriteLibraries: _react2['default'].PropTypes.array, 
    manifestations: _react2['default'].PropTypes.array.isRequired, 
    profile: _react2['default'].PropTypes.object.isRequired, 
    relations: _react2['default'].PropTypes.array }, 


  getUserInfo: function getUserInfo(profile) {
    var userInfo = { 
      agencyId: '', 
      pickupAgencyId: '', 
      borrowerId: '' };


    var favoriteLibraries = this.props.favoriteLibraries || [];

    if (profile.userIsLoggedIn === true) {
      if (favoriteLibraries.length === 1) {
        userInfo.agencyId = favoriteLibraries[0].libraryID;
        userInfo.pickupAgencyId = favoriteLibraries[0].agencyID;
        userInfo.borrowerId = favoriteLibraries[0].borrowerID;} else 

      if (favoriteLibraries.length > 1) {
        var agencies = favoriteLibraries;
        var index = (0, _lodash.findIndex)(agencies, 'default', 1);
        if (index > -1) {
          userInfo.agencyId = favoriteLibraries[index].libraryID;
          userInfo.pickupAgencyId = favoriteLibraries[index].agencyID;
          userInfo.borrowerId = favoriteLibraries[index].borrowerID;} else 

        {
          userInfo.agencyId = favoriteLibraries[0].libraryID;
          userInfo.pickupAgencyId = favoriteLibraries[0].agencyID;
          userInfo.borrowerId = favoriteLibraries[0].borrowerID;}}}



    return userInfo;}, 


  getOrderLink: function getOrderLink(m, userInfo, manifestations, userIsLoggedIn, index) {
    var no_order_types = ['other', 'periodica', 'article'];
    var workTypeOrder = !(no_order_types.indexOf(m.workType) >= 0);

    var order_ids = [m.identifiers];

    return (
      _react2['default'].createElement(_OrderLinkOrderLinkComponentJs2['default'], { 
        agencyId: userInfo.agencyId, 
        borrowerId: userInfo.borrowerId, 
        coverImagePids: manifestations[0].identifiers, 
        key: index, 
        linkText: 'Bestil ' + m.type, 
        orderUrl: '/work' + m.order, 
        pickupAgencyId: userInfo.pickupAgencyId, 
        pids: order_ids, 
        type: m.type, 
        userIsLoggedIn: userIsLoggedIn, 
        workTypeOrder: workTypeOrder }));}, 




  getOnlineLink: function getOnlineLink(relations, index, m) {
    var link = relations.map(function (r, i) {
      if (r.type === 'dbcaddi:hasOnlineAccess') {
        if (r.collection.indexOf('150015-erelic') !== -1 || r.collection.indexOf('150021-bibliotek') !== -1 || r.collection.indexOf('150021-fjern') !== -1) {
          var where = ' hjemme';
          if (r.access === 'onsite') {
            where = ' på biblioteket';}

          var action = '';
          switch (m.type) {
            case 'Ebog':
              action = 'Læs ';
              break;
            case 'Lydbog (net)':
              action = 'Hør ';
              break;
            default:
              action = 'Se ';
              break;}

          var online_link = action + m.type + where;
          return (
            _react2['default'].createElement('a', { className: 'online-link', href: r.link, key: index + '.' + i, target: '_blank' }, online_link));}}});





    return link;}, 


  createButtons: function createButtons(manifestations, userInfo, relations, profile) {var _this = this;
    var orderButtons = manifestations.map(function (m, index) {
      if (m.accessType === 'physical') {
        return _this.getOrderLink(m, userInfo, manifestations, profile.userIsLoggedIn, index);}

      if (m.accessType === 'online' && relations) {
        return _this.getOnlineLink(relations, index, m);}});



    return orderButtons;}, 


  render: function render() {
    var required = ['manifestations', 'profile'];
    for (var i in required) {
      if (!this.props.hasOwnProperty(required[i])) {
        return _react2['default'].createElement('div', { className: 'work-container--order-buttons clearfix' });}}


    var manifestations = this.props.manifestations;
    var profile = this.props.profile;
    var relations = this.props.relations;

    var userInfo = this.getUserInfo(profile);

    var orderButtons = this.createButtons(manifestations, userInfo, relations, profile);

    return (
      _react2['default'].createElement('div', { className: 'work-container--order-buttons clearfix' }, 
      orderButtons));} });exports['default'] = 





OrderButton;module.exports = exports['default'];