'use strict';

/**
 * @file
 * Testing OrderLink.component.js
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
    const pickupAgency = '710100';
    const title = 'This is a title';
    const type = 'Bog';
    const workPid = '870970-basis:28183488';
    const pids = ['870970-basis:28183488'];
    render.render(<Order pickupAgency={pickupAgency} pids={pids} title={title} type={type} workPid={workPid} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
  });

  it('Assert element with info about material being ordered', () => {
    const pickupAgency = '710100';
    const title = 'This is a title';
    const type = 'Bog';
    const workPid = '870970-basis:28183488';
    const pids = ['870970-basis:28183488'];
    render.render(<Order pickupAgency={pickupAgency} pids={pids} title={title} type={type} workPid={workPid} />);
    const rendered = render.getRenderOutput();
    const text = 'This is a title (Bog)';
    assert.strictEqual(text, rendered.props.children.props.children[1]._store.props.children);
  });

  it('Assert element width correct classes', () => {
    const pickupAgency = '710100';
    const title = 'This is a title';
    const type = 'Bog';
    const workPid = '870970-basis:28183488';
    const pids = ['870970-basis:28183488'];
    render.render(<Order pickupAgency={pickupAgency} pids={pids} title={title} type={type} workPid={workPid} />);
    const rendered = render.getRenderOutput();
    const classes = 'place-order-button button';
    assert.strictEqual(classes, rendered.props.children.props.children[4]._store.props.className);
  });

});
