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
    coverImagePids: React.PropTypes.array.isRequired,
    linkText: React.PropTypes.string.isRequired,
    orderUrl: React.PropTypes.string.isRequired,
    pids: React.PropTypes.array.isRequired,
    userIsLoggedIn: React.PropTypes.bool.isRequired
  },

  getInitialState() {
    return {
      canOrder: false,
      orderUrl: this.props.orderUrl + '&pickupAgency=' + this.props.agencyId + '&coverImageIds=' + this.props.coverImagePids
    };
  },

  componentDidMount() {
    if (this.props.agencyId === '') {
      this.setOrderAlwaysPossible();
    }
    else if (this.props.userIsLoggedIn === true) {
      OrderLinkStore.listen(this.setOrderPossible);
      if (this.props.pids) {
        OrderLinkActions({agencyId: this.props.agencyId, pids: this.props.pids});
      }
    }
  },

  setOrderAlwaysPossible() {
    this.setState({
      canOrder: true
    });
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
