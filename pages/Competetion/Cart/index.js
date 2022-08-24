import React, { Component } from 'react';
import Layout from '../../components/Layout';
import CartFeeds from '../../components/CartFeeds';


class Cart extends Component {
  render() {
    return (
      <Layout>
        <CartFeeds />
      </Layout>
    );
  }
}

export default Cart;
