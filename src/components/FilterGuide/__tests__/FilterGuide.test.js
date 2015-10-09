'use strict';

/**
 * @file
 * Test FilterGuide component.
 */

import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import FilterGuide from '../FilterGuide.component.js';
import FilterGuideListElement from '../FilterGuideListElement.component.js';
import React from 'react';

describe('Test the FilterGuide component', () => {
  it('displays a list of words', ()=> {
    let elements = [
      {value: 'test', type: 'testType'},
      {value: 'test2', type: 'testType2'}
    ];
    let categories = [{type: 'term.workType', value: 'Movie', displayValue: 'Film', cssClass: 'worktype'}];

    let select = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    let props = {
      categories,
      elements,
      select
    };

    let element = React.createElement(FilterGuide, props);
    let dom = TestUtils.renderIntoDocument(element);
    let filterelements = TestUtils.scryRenderedComponentsWithType(dom, FilterGuideListElement);
    expect(filterelements).to.have.length(3);

    // Test first element has label
    let label = TestUtils.findRenderedDOMComponentWithClass(filterelements[1], 'element-label').getDOMNode().textContent;
    expect(label).to.equal('test');

    // Click on element
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(filterelements[1], 'a'));
    expect(select.calledWith({value: 'test', type: 'testType'})).to.be.ok; // eslint-disable-line block-scoped-var, no-unused-expressions
  });
});
