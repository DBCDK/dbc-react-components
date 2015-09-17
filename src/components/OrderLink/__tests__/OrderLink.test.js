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
    const path = 'this/is/a/path/';
    const agencyId = '710100';
    const borrowerId = '1231231230';
    const key = 0;
    const linkText = 'Bestil Bog';
    const pickupAgencyId = '710117';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = true;
    render.render(
      <OrderLink agencyId={agencyId}
                 borrowerId={borrowerId}
                 coverImagePids={coverImagePids}
                 key={key}
                 linkText={linkText}
                 orderUrl={path}
                 pickupAgencyId={pickupAgencyId}
                 pids={pids}
                 userIsLoggedIn={userIsLoggedIn} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'a', 'Component rendered element of type \'a\'');
    assert.strictEqual(rendered._store.props['data-identifiers'][0], '870970-basis:28183488', 'Identifier is set');
    assert.strictEqual(rendered._store.props['data-canorder'], false, 'Cannot order');
  });

  it('Assert href is eq when orderUrl is given as prop', () => {
    const path = 'this/is/a/path/';
    const agencyId = '710100';
    const borrowerId = '1231231230';
    const key = 0;
    const linkText = 'Bestil Bog';
    const pickupAgencyId = '710117';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = true;
    render.render(<OrderLink agencyId={agencyId}
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
                             key={key}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={pickupAgencyId}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    const rendered = render.getRenderOutput();
    assert.isDefined(rendered.props.href);
    assert.strictEqual('this/is/a/path/&pickupAgency=710117&borrowerId=1231231230&coverImageIds=870970-basis:28183488', rendered.props.href);
  });

  it('Assert agencyId and pids are undefined when given as props', () => {
    const path = 'this/is/a/path/';
    const agencyId = '710100';
    const borrowerId = '1231231230';
    const key = 0;
    const linkText = 'Bestil Bog';
    const pickupAgencyId = '710117';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = true;
    render.render(<OrderLink agencyId={agencyId}
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
                             key={key}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={pickupAgencyId}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    const rendered = render.getRenderOutput();
    assert.isUndefined(rendered.props.agencyId);
    assert.isUndefined(rendered.props.pids);
  });

  it('Assert linkText added as child when given as a prop', () => {
    const path = 'this/is/a/path/';
    const agencyId = '710100';
    const borrowerId = '1231231230';
    const key = 0;
    const linkText = 'Bestil bog';
    const pickupAgencyId = '710117';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const text = 'Bestil bog';
    const userIsLoggedIn = true;
    render.render(<OrderLink agencyId={agencyId}
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
                             key={key}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={pickupAgencyId}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    const rendered = render.getRenderOutput();
    assert.isDefined(rendered.props.children);
    assert.strictEqual(text, rendered.props.children);
  });

  it('User not logged in', () => {
    const path = 'this/is/a/path/';
    const agencyId = '';
    const borrowerId = '';
    const linkText = 'Bestil bog';
    const key = 0;
    const pickupAgencyId = '';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = false;
    const rend = TestUtils.renderIntoDocument(<OrderLink agencyId={agencyId}
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
                             key={key}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={pickupAgencyId}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.strictEqual(true, rend.state.canOrder);
  });

  it('No agency id provided', () => {
    const path = 'this/is/a/path/';
    const borrowerId = '';
    const linkText = 'Bestil bog';
    const key = 0;
    const pickupAgencyId = '710117';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = false;
    render = TestUtils.renderIntoDocument(<OrderLink
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
                             key={key}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={pickupAgencyId}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.isDefined(render.getDOMNode());
    assert.strictEqual(render.getDOMNode().className, 'no-order-button');
  });

  it('No borrower id provided', () => {
    const path = 'this/is/a/path/';
    const linkText = 'Bestil bog';
    const key = 0;
    const pickupAgencyId = '710117';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = false;
    render = TestUtils.renderIntoDocument(<OrderLink
                             coverImagePids={coverImagePids}
                             key={key}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={pickupAgencyId}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.isDefined(render.getDOMNode('div'));
    assert.strictEqual(render.getDOMNode('div').className, 'no-order-button');
  });

  it('No pickup agency id provided', () => {
    const path = 'this/is/a/path/';
    const linkText = 'Bestil bog';
    const key = 0;
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = false;
    render = TestUtils.renderIntoDocument(<OrderLink
                             coverImagePids={coverImagePids}
                             key={key}
                             linkText={linkText}
                             orderUrl={path}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.isDefined(render.getDOMNode());
    assert.strictEqual(render.getDOMNode().className, 'no-order-button');
  });

  it('No link text provided', () => {
    const path = 'this/is/a/path/';
    const key = 0;
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = false;
    render = TestUtils.renderIntoDocument(<OrderLink
                             coverImagePids={coverImagePids}
                             key={key}
                             orderUrl={path}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.isDefined(render.getDOMNode());
    assert.strictEqual(render.getDOMNode().className, 'no-order-button');
  });

  it('No cover image pids provided', () => {
    const path = 'this/is/a/path/';
    const key = 0;
    const pids = ['870970-basis:28183488'];
    const userIsLoggedIn = false;
    render = TestUtils.renderIntoDocument(<OrderLink
                             key={key}
                             orderUrl={path}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.isDefined(render.getDOMNode());
    assert.strictEqual(render.getDOMNode().className, 'no-order-button');
  });

  it('No pids provided', () => {
    const path = 'this/is/a/path/';
    const key = 0;
    const userIsLoggedIn = false;
    render = TestUtils.renderIntoDocument(<OrderLink
                             key={key}
                             orderUrl={path}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.isDefined(render.getDOMNode());
    assert.strictEqual(render.getDOMNode().className, 'no-order-button');
  });

  it('No order url provided', () => {
    const key = 0;
    const userIsLoggedIn = false;
    render = TestUtils.renderIntoDocument(<OrderLink
                             key={key}
                             userIsLoggedIn={userIsLoggedIn} />);
    assert.isDefined(render.getDOMNode());
    assert.strictEqual(render.getDOMNode().className, 'no-order-button');
  });

  it('No user is logged in information provided', () => {
    const key = 0;
    render = TestUtils.renderIntoDocument(<OrderLink
                             key={key} />);
    assert.isDefined(render.getDOMNode());
    assert.strictEqual(render.getDOMNode().className, 'no-order-button');
  });

});
