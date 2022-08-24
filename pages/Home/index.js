import React, { Component } from "react";
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import PopupStore from '../../components/PopupStore';
import HomeFeeds from '../../components/HomeFeeds';

class Home extends Component {
  componentDidMount() {
    const token = this.props.location.search ? this.props.location.search.split('=')[1] : '' 
    if(token) {
      this.props.onVerifyAccountRequest({ token });
    }
  }
  
  render() {
    return (
      <Layout>
        <Carousel />
        <PopupStore />
        <HomeFeeds />
      </Layout>
    )
  }
}

export default Home
