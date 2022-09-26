import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Register from './views/AuthViews/Register';
import Login from './views/AuthViews/Login'
import  GuestRoute  from "./components/routes/GuestRoute";


function App() {
  return (
   <Router>
    <NavBar />
    <Switch>
    <GuestRoute exact path="/register">
            <Register />
    </GuestRoute>
    <GuestRoute exact path="/login">
            <Login />
    </GuestRoute>
    </Switch>
   </Router>
  );
}

export default App;
