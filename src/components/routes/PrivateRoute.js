import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeSelectIsAuthenticated } from "../../redux/selectors/AuthSelectors";
import { ROUTE } from "../../views/routes";

export default function PrivateRoute({ children, ...props }) {
  const isAuthenticated = useSelector(makeSelectIsAuthenticated());

  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to={ROUTE.DEFAULT} />}
    </Route>
  );
}
