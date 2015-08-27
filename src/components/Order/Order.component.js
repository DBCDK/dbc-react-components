'use strict';
/**
 * @file
 * Currently the main entrypoint served on /order.
 * Provides the order form for the enduser.
 */
import React from 'react';

const Order = React.createClass({

  displayName: function() {
    return 'Order';
  },

  propTypes: {
    order: React.PropTypes.object.isRequired
  },

  render() {
    const title = this.props.order.title;
    const type = this.props.order.type;
    const creator = this.props.order.creator;
    const pickupAgency = this.props.order.pickupAgency;
    const ids = this.props.order.ids;

    const workId = ids.replace(/,.*/, '');

    const cancelLink = '/work?id=' + workId;

    const cancelOrder = <a className={'cancel-order-button button'} href={cancelLink}>Annuller</a>;

    let orderInfo = orderInfo = title + ' (' + type + ')';

    if (creator !== '') {
      orderInfo = creator + ': ' + title + ' (' + type + ')';
    }

    const libraryInfo = 'Til afhentning på dit bibliotek (' + pickupAgency + ')';

    const orderLink = '/receipt?ids=' + ids + '&pickupAgency=' + pickupAgency + '&title='
      + encodeURIComponent(title) + '&creator=' + encodeURIComponent(creator) + '&type=' + encodeURIComponent(type);

    let placeOrder = <a className={'place-order-button button'} href={orderLink}>Ok</a>;

    return (<div className='order-container'>
        <div className='order small-12 medium-6 large-4'>
          <div className="order-headline">Du er i gang med at bestille:</div>
          <div className="order-info">{orderInfo}</div>
          <div className="library">{libraryInfo}</div>
          {cancelOrder}
          {placeOrder}
        </div>
      </div>
    );
  }
});

export default Order;
