import React from 'react';
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ linkToken, component: Component, ...rest }) => {
  const auth = linkToken
                ? !!window.localStorage.getItem('linktoken')
                : !!window.localStorage.getItem('token');
  
  return(
    <Route
      {...rest}
      render = {(props) => auth
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/' }} />}
    />
  )
}

export default PrivateRoute;