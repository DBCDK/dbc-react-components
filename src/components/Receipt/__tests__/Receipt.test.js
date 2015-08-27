'use strict';

/**
 * @file
 * Testing Receipt.component.js
 */

import React from 'react/addons';
import {assert} from 'chai';

import Receipt from '../Receipt.component.js';

describe('Test Receipt Component', () => {

  let TestUtils = null;
  let render = null;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    render = TestUtils.createRenderer();
  });

  it('Assert type of rendered element', () => {
    const receipt = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };
    render.render(<Receipt receipt={receipt} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
  });

});
