'use strict';

/**
 * @file
 * Testing Order.component.js
 */

import React from 'react/addons';
import {assert} from 'chai';

import Order from '../Order.component.js';

describe('Test Order Component', () => {

  let TestUtils = null;
  let render = null;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    render = TestUtils.createRenderer();
  });

  it('Assert type of rendered element', () => {
    const order = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };
    render.render(<Order order={order} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
  });

  it('Assert element with info about material being ordered', () => {
    const order = {
      pickupAgency: '710100',
      creator: '',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };
    render.render(<Order order={order} />);
    const rendered = render.getRenderOutput();
    const text = 'This is a title (Bog)';
    assert.strictEqual(text, rendered.props.children[1]._store.props.children._store.props.children[1]._store.props.children);
  });

  it('Assert element width correct classes', () => {
    const order = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };
    render.render(<Order order={order} />);
    const rendered = render.getRenderOutput();
    const classes = 'place-order-button button';
    assert.strictEqual(classes, rendered.props.children[3]._store.props.className);
  });

});
