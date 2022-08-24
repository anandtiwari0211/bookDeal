import React,{ Component } from 'react';
import { Router, Route, Switch } from "react-router";
import { history } from './history';
import PrivateRoute from './PrivateRoutes';
import Home from '../containers/Home';
import DashBoard from '../pages/Dashboard';
import Competetion from '../pages/Competetion';
import Coupon from '../pages/Coupon';
import Contact from '../pages/Contact';
import CompetetionDetails from '../pages/CompetetionDetails';
import Store from '../pages/Store';
import Cart from '../pages/Cart';

class AppRoutes extends Component {
  render() {
    return(
      <Router history={history} >
        <Switch>
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/store' component={Store} />
          <Route exact path='/competetionDetails' component={CompetetionDetails} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/coupon' component={Coupon} />
          <Route exact path='/competetion' component={Competetion} />
          <PrivateRoute exact path="/dashboard" component={DashBoard} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoutes;
