import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserStart } from "../../redux/actions/AuthActions";

const Register = () =>{
  const history = useHistory(); 
  const dispatch = useDispatch();
  const [ userData, setUserData ] = useState({
    name: "",
    email: "",
    password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if( userData.name && userData.email && userData.password){
            dispatch(createUserStart(userData))
            setTimeout(() => history.push("/login"), 500)
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
          Register
        </h2>
        <form className="justify-content-center " onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              required
              placeholder="name"
              value={userData.name}
              onChange={({ target }) =>
                setUserData({ ...userData, name: target.value })
              }
            />
  
            <input
              className="form-control"
              required
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={({ target }) =>
                setUserData({ ...userData, email: target.value })
              }
            />

            <input
              className="form-control"
              required
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={({ target }) =>
                setUserData({ ...userData, password: target.value })
              }
            />
          </div>
          <br />
          <div>
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
}

export default Register;