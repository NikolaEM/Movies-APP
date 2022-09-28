import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Register from './views/AuthViews/Register';
import  Login  from './views/AuthViews/Login'
import  PublicRoute  from "./components/routes/PublicRoute";
import { ROUTE } from "./views/routes";


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
    </Switch>
   </Router>
  );
}

export default App;
