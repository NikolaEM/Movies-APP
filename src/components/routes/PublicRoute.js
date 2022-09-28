import React from "react";
import {
  Route,
  Redirect
} from 'react-router-dom';
import { makeSelectIsAuthenticated } from "../../redux/selectors/AuthSelectors";
import { useSelector } from "react-redux";


function PublicRoute({ children, ...rest }) {

  const isAuthenticated = useSelector(makeSelectIsAuthenticated());
  return (
    <Route
      {...rest}
      render={
        () => (
          !isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/home',
              }}
            />
          ))
      }
    />
  );
}

export default PublicRoute;