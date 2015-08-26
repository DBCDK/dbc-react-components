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
    creator: React.PropTypes.string,
    pickupAgency: React.PropTypes.string.isRequired,
    pids: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    workPid: React.PropTypes.string.isRequired
  },

  render() {
    const title = this.props.title;
    const type = this.props.type;
    const creator = this.props.creator;
    const pickupAgency = this.props.pickupAgency;
    const workPid = this.props.workPid;
    const pids = this.props.pids;

    const cancelLink = '/work?' + workPid;

    const cancelOrder = <a className={'cancel-order-button button'} href={cancelLink}>Annuller</a>;

    let orderInfo = orderInfo = title + ' (' + type + ')';

    if (typeof (creator) === String) {
      orderInfo = creator + ': ' + title + ' (' + type + ')';
    }

    const libraryInfo = 'Til afhentning på dit bibliotek (' + pickupAgency + ')';

    const orderLink = '/receipt?pids=' + pids + '&pickupAgency=' + pickupAgency;

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
