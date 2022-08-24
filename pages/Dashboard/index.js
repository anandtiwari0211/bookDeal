import React, { Component } from 'react';
import Layout from '../../components/Layout';
import DashBoardProfile from '../../containers/Dashboard';
// import Profile from '../../components/Profile';
// import Competetion from '../../components/Competetion';


class DashBoard extends Component {
  render() {
    return (
      <Layout>
        <DashBoardProfile />
      </Layout>
    );
  }
}

export default DashBoard;