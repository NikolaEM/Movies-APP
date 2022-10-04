import React from "react";
import {
  Route,
  Redirect
} from 'react-router-dom';
import { makeSelectIsAuthenticated } from "../../redux/selectors/AuthSelectors";
import { useSelector } from "react-redux";
import { ROUTE } from "../../views/routes";


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
              to={ROUTE.DEFAULT}
            />
          ))
      }
    />
  );
}

export default PublicRoute;