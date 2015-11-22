'use strict';
/**
 * @file
 * Currently the main entrypoint served on /order.
 * Provides the order form for the enduser.
 */
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Order = _react2['default'].createClass({

  displayName: 'Order.component',

  propTypes: {
    coverImage: _react2['default'].PropTypes.object,
    order: _react2['default'].PropTypes.object.isRequired
  },

  render: function render() {
    var title = this.props.order.title;
    var type = this.props.order.type;
    var creator = this.props.order.creator;
    var pickupAgency = this.props.order.pickupAgency;
    var borrowerId = this.props.order.borrowerId;
    var ids = this.props.order.ids;
    var coverImage = this.props.coverImage;

    var workId = ids.replace(/,.*/, '');

    var cancelLink = '/work?id=' + workId;

    var cancelOrder = _react2['default'].createElement(
      'a',
      { className: 'cancel-order-button button', href: cancelLink },
      'Annuller'
    );

    var orderInfo = title + ' (' + type + ')';

    if (creator !== '') {
      orderInfo = creator + ': ' + title + ' (' + type + ')';
    }

    var libraryInfo = 'Til afhentning på dit bibliotek (' + pickupAgency + ')';

    var orderLink = '/work/receipt?ids=' + ids + '&pickupAgency=' + pickupAgency + '&borrowerId=' + borrowerId + '&title=' + encodeURIComponent(title) + '&creator=' + encodeURIComponent(creator) + '&type=' + encodeURIComponent(type);

    var placeOrder = _react2['default'].createElement(
      'a',
      { className: 'place-order-button button', href: orderLink },
      'Ok'
    );

    var ordering = _react2['default'].createElement(
      'div',
      { className: 'order--info' },
      _react2['default'].createElement(
        'div',
        { className: 'order--headline' },
        'Du er i gang med at bestille:'
      ),
      _react2['default'].createElement(
        'div',
        { className: 'order--bibliographic' },
        orderInfo
      ),
      _react2['default'].createElement(
        'div',
        { className: 'order--library' },
        libraryInfo
      )
    );

    if (pickupAgency === '' || borrowerId === '') {
      placeOrder = '';
      cancelOrder = '';
      var orderHeadline = 'Du skal vælge et favoritbibliotek for at kunne bestille';
      var buttonText = 'bibliotek';
      if (borrowerId === '' && pickupAgency !== '') {
        orderHeadline = 'Du skal gemme dit låner id i din profil';
        buttonText = 'låner id';
      }
      ordering = _react2['default'].createElement(
        'div',
        { className: 'order--info' },
        _react2['default'].createElement(
          'div',
          { className: 'order--headline' },
          orderHeadline
        ),
        _react2['default'].createElement(
          'div',
          { className: 'order--bibliographic' },
          orderInfo
        ),
        _react2['default'].createElement(
          'a',
          { className: 'library-button button', href: '/profile' },
          'Tilføj ',
          buttonText
        )
      );
    }

    return _react2['default'].createElement(
      'div',
      { className: 'order--container' },
      _react2['default'].createElement(
        'div',
        { className: 'image small-4 medium-6 large-4' },
        coverImage
      ),
      _react2['default'].createElement(
        'div',
        { className: 'order small-8 medium-6 large-4' },
        ordering
      ),
      cancelOrder,
      placeOrder
    );
  }
});

exports['default'] = Order;
module.exports = exports['default'];