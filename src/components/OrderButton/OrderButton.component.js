'use strict';
/**
 * @file
 * Provides an order button/online link rendering.
 */
import React from 'react';

import {findIndex} from 'lodash';

import OrderLink from '../OrderLink/OrderLink.component.js';

const OrderButton = React.createClass({
  displayName: 'OrderButton',

  propTypes: {
    manifestations: React.PropTypes.array.isRequired,
    profile: React.PropTypes.object.isRequired,
    relations: React.PropTypes.array
  },

  render() {
    const required = ['manifestations', 'profile'];
    for (let i in required) {
      if (!this.props.hasOwnProperty(required[i])) {
        return <div className='work-container--order-buttons clearfix' ></div>;
      }
    }
    const manifestations = this.props.manifestations;
    const profile = this.props.profile;
    const relations = this.props.relations;

    let agencyId = '';
    let pickupAgencyId = '';
    let borrowerId = '';

    if (profile.userIsLoggedIn === true) {
      if (profile.favoriteLibraries.length === 1) {
        agencyId = profile.favoriteLibraries[0].libraryID;
        pickupAgencyId = profile.favoriteLibraries[0].agencyID;
        borrowerId = profile.favoriteLibraries[0].borrowerID;
      }
      else if (profile.favoriteLibraries.length > 1) {
        const agencies = profile.favoriteLibraries;
        const index = findIndex(agencies, 'default', 1);
        if (index > -1) {
          agencyId = profile.favoriteLibraries[index].libraryID;
          pickupAgencyId = profile.favoriteLibraries[index].agencyID;
          borrowerId = profile.favoriteLibraries[index].borrowerID;
        }
        else {
          agencyId = profile.favoriteLibraries[0].libraryID;
          pickupAgencyId = profile.favoriteLibraries[0].agencyID;
          borrowerId = profile.favoriteLibraries[0].borrowerID;
        }
      }
    }

    const orderButtons = manifestations.map((m, index) => {
      if (m.accessType === 'physical') {
        let order_ids = [];
        order_ids.push(m.identifiers);
        let orderLink = (<OrderLink
          agencyId={agencyId}
          borrowerId={borrowerId}
          coverImagePids={manifestations[0].identifiers}
          key={index}
          linkText={'Bestil ' + m.type}
          orderUrl={'/work' + m.order}
          pickupAgencyId={pickupAgencyId}
          pids={order_ids}
          userIsLoggedIn={profile.userIsLoggedIn}
        />);
        return orderLink;
      }
      if (m.accessType === 'online' && relations) {
        const link = relations.map((r) => {
          let where = ' hjemme';
          if (r.access === 'onsite') {
            where = ' på biblioteket';
          }
          let online_link = 'Se ' + m.type + where;
          return (
            <a className='online-link' href={r.link} key={index} >{online_link}</a>
          );
        });
        return link;
      }
    });
    return (
      <div className='work-container--order-buttons clearfix' >
        {orderButtons}
      </div>
    );
  }
});

export default OrderButton;
