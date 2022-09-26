import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUserStart } from "../../redux/actions/AuthActions";

  const Login = () =>{
  const history = useHistory(); 
  const dispatch = useDispatch();
  const [ credentials, setCredentials ] = useState({
    email: "",
    password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(credentials.email && credentials.password){

            dispatch(loginUserStart(credentials))
            setTimeout(() => history.push("/"), 500)
        };

    };

    return (
        <div>
          <h2
            style={{
              color: "black",
              backgroundColor: "DodgerBlue",
              padding: "10px",
              marginBottom: "50px",
            }}
          >
            Login
          </h2>
          <form className="justify-content-center" onSubmit={handleSubmit}>
            <div>
              <input
                required
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={({ target }) =>
                  setCredentials({ ...credentials, email: target.value })
                }
              />
            </div>
            <br />
            <div>
              <input
                required
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={({ target }) =>
                  setCredentials({ ...credentials, password: target.value })
                }
              />
            </div>
    
            {/* {loginUserError && (
              <span style={{ color: "red" }}>Invalid credentials</span>
            )} */}
    
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      );
    }
export default Login;