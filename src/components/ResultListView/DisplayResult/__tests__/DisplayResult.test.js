'use strict';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

import {expect} from 'chai';
import ResultDisplay from '../DisplayResult.component.js';

describe('Test DisplayResult Component', () => {
  it('Assert correct rendering of ResultDisplay component', function() {

    let rendered = TestUtils.renderIntoDocument(<ResultDisplay />);

    let result = React.findDOMNode(rendered);

    expect(React.findDOMNode(result).className).to.contain('container');

  });
});
