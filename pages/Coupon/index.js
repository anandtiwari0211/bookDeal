import React, { Component } from 'react';
import Layout from '../../components/Layout';
import CouponFeeds from '../../containers/Coupans';

class Coupon extends Component {
  render() {
    return (
      <Layout>
        <CouponFeeds />
      </Layout>
    );
  }
}

export default Coupon;