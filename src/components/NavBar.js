import "../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectIsAuthenticated } from "../redux/selectors/AuthSelectors"
import { logoutUserSuccess } from "../redux/actions/AuthActions";

export default function Navbar() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(makeSelectIsAuthenticated());

  function handleLogout(e) {
      dispatch(logoutUserSuccess())
    }
  
  return (
    <div>
      <nav className="navbar navbar-expand-sm  navbar-dark bg-dark main-nav justify-content-center">
        <ul className="navbar-nav">
            {isAuthenticated ? (
              <h3 style={{ color: "red" }}>
                User  {}
              </h3>
            ) : (
              <h3 style={{ color: "red" }}>Guest</h3>
            )}
          {isAuthenticated ? (
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
           ) : ( 
            <>
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
           )}
        </ul>
      </nav>
    </div>
  );
}