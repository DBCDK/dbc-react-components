'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.updateQueryFromString = updateQueryFromString;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * Creates a new query object with a value and type key
 *
 * @param stringElements
 * @returns {Array}
 */
function addElementsFromString(stringElements) {
  var newElementValues = stringElements.split(' ');

  return newElementValues.map(function (value) {
    return {
      value: value,
      type: 'text'
    };
  });
}

/**
 * Returns the index of a phrase in a string. If no match return null
 *
 * @param string
 * @param phrase
 * @returns {Array|{index: number, input: string}|number}
 */
function indexOfPhraseInString(string, phrase) {
  var req = new RegExp('(^|[^\\w])' + phrase + '($|[^\\w])', 'g');
  var match = req.exec(string);

  return match && string.indexOf(phrase);
}

/**
 * Helper function for the reduce call in updateQueryFromString
 *
 * @param previous
 * @param element
 * @returns {{string: *, query: *}}
 */
function testElementAgainstString(previous, element) {
  var string = previous.string;
  var query = previous.query;

  var indexValue = indexOfPhraseInString(string, element.value);
  if (indexValue > 0) {
    // the query element matches a part of the string but not from the beginning
    var newElementValues = string.substring(0, indexValue).trim();
    var newElements = addElementsFromString(newElementValues);
    query.push(newElements);
    string = string.substring(indexValue, string.length).trim();
  }
  if (indexValue > 0 || indexValue === 0) {
    // element was matched, remove element.value from string and add element to query
    string = string.substring(element.value.length, string.length).trim();
    query.push(element);
  }

  return { string: string, query: query };
}
/**
 * Takes a string and matches is up against an array of query elements
 * Unmatched words in the string is added to the query and unmatched elements in the query array
 * is removed
 *
 * @param string
 * @param query array of objects with a value and type key as a minimum
 * @returns {Array}
 */

function updateQueryFromString(string, query) {
  // initial state for the reduce function
  var initialState = {
    string: string,
    query: []
  };
  // Reduce the query array to a new list of queries
  var state = query.reduce(testElementAgainstString, initialState);
  // Add the remaining string to the query array
  if (state.string.length > 0) {
    var newElements = addElementsFromString(state.string);
    state.query.push(newElements);
  }

  return _lodash2['default'].flatten(state.query);
}