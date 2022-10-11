import "./App.css";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { ROUTE } from "./views/routes";
import NavBar from "./components/NavBar";
import Register from "./views/AuthViews/Register";
import Login from "./views/AuthViews/Login";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import CreateMovie from "./views/MovieViews/CreateMovie";
import Movies from "./views/MovieViews/Movies";
import SingleMovie from "./views/MovieViews/SingleMovie";
import PopularMovies from "./views/MovieViews/PopularMovies";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRoute exact path={ROUTE.REGISTER}>
          <Register />
        </PublicRoute>
        <PublicRoute exact path={ROUTE.LOGIN}>
          <Login />
        </PublicRoute>
        <PrivateRoute exact path={ROUTE.DEFAULT}>
          <Redirect to={ROUTE.MOVIES} />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTE.CREATE_MOVIE}>
          <CreateMovie />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTE.MOVIES}>
          <Movies />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTE.SINGLE_MOVIE}>
          <SingleMovie />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTE.POPULAR}>
          <PopularMovies />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
