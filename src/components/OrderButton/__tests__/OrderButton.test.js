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

  it('Assert rendering of order buttons', () => {
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
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.strictEqual('Bestil Bog', rendered._store.props.children[0]._store.props.linkText, 'Component rendered order button text');
    assert.strictEqual('/work/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog',
      rendered._store.props.children[0]._store.props.orderUrl, 'Component rendered order button text');
    assert.strictEqual('775100-katalog:27695183', rendered._store.props.children[0]._store.props.coverImagePids[0], 'Cover Image identifier');
    assert.strictEqual('Se Lydbog (net) online', rendered._store.props.children[1]._store.props.children, 'Component rendered online link text');
    assert.strictEqual(rendered._store.props.className, 'work-container--order-buttons clearfix', 'Component rendered element with class');
    assert.strictEqual(rendered._store.props.children[1].type, 'a', 'Component rendered element of type \'a\'');
  });

  it('User not logged in', () => {
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
    assert.strictEqual(false, rendered._store.props.children[0]._store.props.userIsLoggedIn, 'User is not logged in');
    assert.strictEqual('', rendered._store.props.children[0]._store.props.agencyId, 'No agencyId');
  });

  it('User logged in, no favorite library', () => {
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
      userIsLoggedIn: true,
      error: {}
    };
    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered._store.props.children[0]._store.props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('', rendered._store.props.children[0]._store.props.agencyId, 'No agencyId');
  });

  it('User logged in, has favorite library, no borrower Id', () => {
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
      favoriteLibraries: [{agencyID: '710117', libraryID: '710100', borrowerID: '', default: 0}],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };
    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered._store.props.children[0]._store.props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('710117', rendered._store.props.children[0]._store.props.pickupAgencyId, 'User has a chosen a favorite library');
    assert.strictEqual('', rendered._store.props.children[0]._store.props.borrowerId, 'User has not provided borrower Id');
  });

  it('User logged in, has favorite library and borrower Id', () => {
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
      favoriteLibraries: [{agencyID: '710117', libraryID: '710100', borrowerID: '1231231230', default: 0}],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };
    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered._store.props.children[0]._store.props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('1231231230', rendered._store.props.children[0]._store.props.borrowerId, 'User has provided borrower Id');
  });

  it('User logged in, has pickup agency and borrower Id', () => {
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
      favoriteLibraries: [{agencyID: '710117', libraryID: '710100', borrowerID: '1231231230', default: 1}],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };
    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered._store.props.children[0]._store.props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('1231231230', rendered._store.props.children[0]._store.props.borrowerId, 'User has provided borrower Id');
  });

  it('User logged in, second library as pickup agency', () => {
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
      favoriteLibraries: [{agencyID: '710117', libraryID: '710100', borrowerID: '', default: 0}, {agencyID: '775100', libraryID: '775100', borrowerID: '1231231230', default: 1}],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };
    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered._store.props.children[0]._store.props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('775100', rendered._store.props.children[0]._store.props.pickupAgencyId, 'User has chosen pickup agency');
  });

  it('No manifestations provided', () => {
    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibraries: [{agencyID: '710117', libraryID: '710100', borrowerID: '', default: 0}, {agencyID: '775100', libraryID: '775100', borrowerID: '1231231230', default: 1}],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };
    render.render(
      <OrderButton profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.isUndefined(rendered._store.props.children);
  });

  it('No profile provided', () => {
    const manifestations = [
      {type: 'Bog', accessType: 'physical', title: 'Den tavse by', creator: 'Cassandra Clare',
      identifiers: ['775100-katalog:27695183'], dates: ['2009'],
      order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'},
      {type: 'Lydbog (net)', accessType: 'online', title: 'Den tavse by', creator: 'Cassandra Clare', identifiers: ['775100-katalog: 28993374'], dates: ['2011']}];
    render.render(
      <OrderButton manifestations={manifestations} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.isUndefined(rendered._store.props.children);
  });

  it('No manifestations nor profile provided', () => {
    render.render(
      <OrderButton />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.isUndefined(rendered._store.props.children);
  });

});
