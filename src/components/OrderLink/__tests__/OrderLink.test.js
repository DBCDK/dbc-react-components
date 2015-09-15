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
    const linkText = 'Bestil Bog';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = true;
    render.render(
      <OrderLink agencyId={agencyId}
                 borrowerId={borrowerId}
                 coverImagePids={coverImagePids}
                 linkText={linkText}
                 orderUrl={path}
                 pickupAgencyId={''}
                 pids={pids}
                 userIsLoggedIn={userIsLoggedIn} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'a', 'Component rendered element of type \'a\'');
  });

  it('Assert href is eq when orderUrl is given as prop', () => {
    const path = 'this/is/a/path/';
    const agencyId = '710100';
    const borrowerId = '1231231230';
    const linkText = 'Bestil Bog';
    const pickupAgencyId = '710117';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = true;
    render.render(<OrderLink agencyId={agencyId}
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
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
    const linkText = 'Bestil Bog';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const userIsLoggedIn = true;
    render.render(<OrderLink agencyId={agencyId}
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={''}
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
    const linkText = 'Bestil bog';
    const pids = ['870970-basis:28183488'];
    const coverImagePids = ['870970-basis:28183488'];
    const text = 'Bestil bog';
    const userIsLoggedIn = true;
    render.render(<OrderLink agencyId={agencyId}
                             borrowerId={borrowerId}
                             coverImagePids={coverImagePids}
                             linkText={linkText}
                             orderUrl={path}
                             pickupAgencyId={''}
                             pids={pids}
                             userIsLoggedIn={userIsLoggedIn} />);
    const rendered = render.getRenderOutput();
    assert.isDefined(rendered.props.children);
    assert.strictEqual(text, rendered.props.children);
  });

});
