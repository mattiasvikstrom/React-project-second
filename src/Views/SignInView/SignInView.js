import React, { useState, useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { useHistory } from "react-router-dom";

export const SignInView = () => {
  const history = useHistory()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const Login = () => {
    setAuthenticatedUser(username);
    localStorage.setItem("username", username)
    history.push('/')
  };

  return (
    <div className="col-md-4 offset-md-5">
      <div className="col-sm-3 my-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="col-sm-3 my-1">
        <label>Password</label>
        <div>
          <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)}/>
        </div>
      </div>
      <div className="col-auto my-1">
        <button className="btn btn-primary" onClick={() => Login()}>
          Login
        </button>
      </div>
    </div>
  );
};
