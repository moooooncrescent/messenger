import React, { useState } from "react";
import gql from "graphql-tag";
import { User, useRegisterMutation } from "../../../graphql";

const Register = () => {
  const [user, setUser] = useState<User>();
  const [register] = useRegisterMutation({ variables: { input: user } });

  return (
    <div className="form-signin text-center">
      <h1 className="h3 mb-3 font-weight-normal">Welcome to the moonchat</h1>
      <label className="d-block">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          value={user?.email ?? ""}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        ></input>
      </label>
      <label className="d-block">
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
        className="btn btn-lg btn-primary btn-block"
        onClick={() => register()}
      >
        Регистрация
      </button>
    </div>
  );
};
export default Register;
