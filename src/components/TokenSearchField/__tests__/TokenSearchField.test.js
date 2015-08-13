'use strict';

/**
 * @file
 * Test TokenSearchField Component
 */

import {expect, assert} from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import SearchField from '../TokenSearchField.component.js';
import Token from '../../TokenList/Token.component.js';
import React from 'react';

describe('Test the SearchField component', () => {
  it('displays a string with a close button', ()=> {
    let updateSpy = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    let state = {
      query: [{value: 'test1', index: 1}, {value: 'test2', index: 2}],
      update: updateSpy
    };

    // Create TokenList Compontent
    let element = React.createElement(SearchField, state);
    let dom = TestUtils.renderIntoDocument(element);
    let searchField = TestUtils.findRenderedComponentWithType(dom, SearchField);

    // Test state
    expect(searchField.props.query).to.have.length(2);

    // Test tokens are created
    let Tokens = TestUtils.scryRenderedComponentsWithType(dom, Token);
    expect(Tokens).to.have.length(2);

    // remove first button
    let label = TestUtils.findRenderedDOMComponentWithClass(Tokens[0], 'text').getDOMNode().textContent;
    expect(label).to.equal('test2');
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(Tokens[0], 'remove'));
    assert(updateSpy.calledWith([{value: 'test1', index: 1}]), 'called with remaining object');

    // remove last button
    label = TestUtils.findRenderedDOMComponentWithClass(Tokens[1], 'text').getDOMNode().textContent;
    expect(label).to.equal('test1');
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(Tokens[1], 'remove'));
    assert(updateSpy.calledWith([{value: 'test2', index: 2}]), 'called with remaining object');
  });
});
