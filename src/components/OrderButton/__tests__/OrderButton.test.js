'use strict';

/**
 * @file
 * Testing OrderButton.component.js
 */

import React from 'react/addons';
import {assert} from 'chai';

import OrderButton from '../OrderButton.component.js';

describe('Test OrderButton Component', () => {

  let TestUtils = null;
  let render = null;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    render = TestUtils.createRenderer();
  });

  it('Assert rendering of order button text', () => {
    const manifestations = [
      {type: 'Bog', accessType: 'physical', title: 'Den tavse by', creator: 'Cassandra Clare',
      identifiers: ['775100-katalog:27695183'], dates: ['2009'],
      order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'},
      {type: 'Lydbog (net)', accessType: 'online', title: 'Den tavse by', creator: 'Cassandra Clare', identifiers: ['775100-katalog: 28993374'], dates: ['2011']}];
    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibraries: [],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: false,
      error: {}
    };
    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    const text = 'Bestil Bog';
    assert.strictEqual(text, rendered._store.props.children[0]._store.props.linkText, 'Component rendered order button text');
  });

});
