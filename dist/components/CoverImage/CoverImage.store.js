'use strict';Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _reflux = require(

'reflux');var _reflux2 = _interopRequireDefault(_reflux);var _CoverImageActionJs = require(
'./CoverImage.action.js');var _CoverImageActionJs2 = _interopRequireDefault(_CoverImageActionJs);

var store = {};

var CoverImageStore = _reflux2['default'].createStore({ 
  getState: function getState() {
    return store;}, 


  init: function init() {
    this.listenTo(_CoverImageActionJs2['default'].updated, this.update);}, 


  update: function update(response) {
    var pid = response.identifiers.toString();
    store[pid] = response.result.images;
    this.pushStore();}, 


  pushStore: function pushStore() {
    this.trigger(store);} });exports['default'] = 



CoverImageStore;module.exports = exports['default'];