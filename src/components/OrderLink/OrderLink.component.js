'use strict';

/**
 * @file
 * Renders an order link based on the given pids and an agency id (library).
 */
import React from 'react';
import OrderLinkStore from './OrderLink.store.js';
import OrderLinkActions from './OrderLink.action.js';

const OrderLink = React.createClass({

  displayName: 'OrderLink',
  propTypes: {
    agencyId: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired,
    orderUrl: React.PropTypes.string.isRequired,
    pids: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      canOrder: false,
      orderUrl: this.props.orderUrl + '&pickupAgency=' + this.props.agencyId
    };
  },

  componentDidMount() {
    OrderLinkStore.listen(this.setOrderPossible);
    if (this.props.pids) {
      OrderLinkActions({agencyId: this.props.agencyId, pids: this.props.pids});
    }
  },

  setOrderPossible(store) {
    if (store[this.props.pids.toString()] === 'true') {
      this.setState({
        canOrder: true
      });
    }
  },

  render() {
    return (<a
      className={'can-order-' + this.state.canOrder + ' order-button button'}
      data-canorder={this.state.canOrder}
      data-identifiers={this.props.pids}
      href={this.state.orderUrl}>
      {this.props.linkText}</a>);
  }
});

export default OrderLink;