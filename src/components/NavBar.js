import "../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectIsAuthenticated } from "../redux/selectors/AuthSelectors";
import { logoutUserSuccess } from "../redux/actions/AuthActions";
import { ROUTE } from "../views/routes";

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(makeSelectIsAuthenticated());

  function handleLogout() {
    dispatch(logoutUserSuccess());
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm  navbar-dark bg-dark main-nav justify-content-center">
        <ul className="navbar-nav">
          {isAuthenticated ? (
            <h3 style={{ color: "red" }}>User {}</h3>
          ) : (
            <h3 style={{ color: "red" }}>Guest</h3>
          )}
          {isAuthenticated ? (
            <>
              <Link className="nav-link" to={ROUTE.MOVIES}>
                Movies
              </Link>
              <Link className="nav-link" to={ROUTE.CREATE_MOVIE}>
                Create Movie
              </Link>

              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <li className="nav-item active">
                <Link className="nav-link" to={ROUTE.LOGIN}>
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={ROUTE.REGISTER}>
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
