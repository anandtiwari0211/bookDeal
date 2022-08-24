import React, { Component } from 'react';
import Layout from '../../components/Layout';
import SearchCompetetion from '../../containers/SearchCompetition';


class Competetion extends Component {
  render() {
    return (
      <Layout>
        <SearchCompetetion />
      </Layout>
    );
  }
}

export default Competetion;