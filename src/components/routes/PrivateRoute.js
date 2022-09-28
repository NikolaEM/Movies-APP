import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeSelectIsAuthenticated } from "../../redux/selectors/AuthSelectors";

export default function PrivateRoute({ children, ...props }) {
  const isAuthenticated = useSelector(makeSelectIsAuthenticated);
console.log("props", props)
  return (
    <Route {...props}>
      {!isAuthenticated ? children : <Redirect to="/" />}
    </Route>
  );
}