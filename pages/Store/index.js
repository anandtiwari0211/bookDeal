import React, { Component } from 'react';
import Layout from '../../components/Layout';
import StoreFeeds from '../../components/StoreFeeds';


class Store extends Component {
  render() {
    return (
      <Layout>
        <StoreFeeds />
      </Layout>
    );
  }
}

export default Store;
