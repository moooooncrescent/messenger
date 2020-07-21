import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { User, useUserLazyQuery } from "../../../graphql";

const Login = () => {
  const [user, setUser] = useState<User>();
  const [login, { loading, error, data }] = useUserLazyQuery({
    variables: { input: user },
  });
  const token = require("md5");
  console.log(token("message"));
  return (
    <div className="form-signin text-center">
      <h1 className="h3 mb-3 font-weight-normal">moonchat</h1>
      <label className="d-block">
        <span>Email address</span>
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          value={user?.email ?? ""}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        ></input>
      </label>
      <label className="d-block">
        <span>Password</span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={user?.password ?? ""}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        ></input>
      </label>
      <button
        className="btn btn-link mt-2 mb-1 text-muted text-center"
        onClick={() => {
          login();
          if (error) {
            console.log(error);
          }
          if (data) {
            console.log(data);
          }
        }}
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
