'use strict';

/**
 * @file
 * Testing OrderLink.component.js
 */

import React from 'react/addons';
import {assert} from 'chai';

import OrderLink from '../OrderLink.component.js';

describe('Test OrderLink Component', () => {

  let TestUtils = null;
  let render = null;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    render = TestUtils.createRenderer();
  });

  it('Assert type of rendered element', () => {
    render.render(<OrderLink />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'a', 'Component rendered element of type \'a\'');
  });

  it('Assert href is undefined when orderUrl is not given as prop', () => {
    render.render(<OrderLink />);
    const rendered = render.getRenderOutput();
    assert.isUndefined(rendered.props.href);
  });

  it('Assert href is eq when orderUrl is given as prop', () => {
    const path = 'this/is/a/path/';
    render.render(<OrderLink orderUrl={path} />);
    const rendered = render.getRenderOutput();
    assert.isDefined(rendered.props.href);
    assert.strictEqual(path, rendered.props.href);
  });

  it('Assert agencyId and pids are undefined when given as props', () => {
    const path = 'this/is/a/path/';
    const agencyId = '710100';
    const pids = ['870970-basis:28183488'];
    render.render(<OrderLink agencyId={agencyId} orderUrl={path} pids={pids} />);
    const rendered = render.getRenderOutput();
    assert.isUndefined(rendered.props.agencyId);
    assert.isUndefined(rendered.props.pids);
  });

  it('Assert linkText added as child when given as a prop', () => {
    const path = 'this/is/a/path/';
    const agencyId = '710100';
    const pids = ['870970-basis:28183488'];
    const text = 'Bestil bog';
    render.render(<OrderLink agencyId={agencyId} linkText={text} orderUrl={path}pids={pids} />);
    const rendered = render.getRenderOutput();
    assert.isDefined(rendered.props.children);
    assert.strictEqual(text, rendered.props.children);
  });

});
