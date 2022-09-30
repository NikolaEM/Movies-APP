import './App.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { ROUTE } from "./views/routes";
import NavBar from "./components/NavBar";
import Register from './views/AuthViews/Register';
import  Login  from './views/AuthViews/Login'
import  PublicRoute  from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import CreateMovie from "./views/MovieViews/CreateMovie";



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
    <PrivateRoute exact path={ROUTE.CREATE_MOVIE}>
            <CreateMovie />
    </PrivateRoute>
    </Switch>
   </Router>
  );
}

export default App;
