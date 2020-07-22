import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";
import "./login.css";

export default (props) => {
  const { email } = queryString.parse(props.location.search) || "";
  const [state, setState] = useState({ email: email, password: "" });
  let history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let loginStatus = await axios.post("/api/workspace/login", state);
    console.log(loginStatus);
    if ((loginStatus.status = 200)) {
      history.push("/");
    }
  };
  return (
    <React.Fragment>
      <div className="create-workspace-wrapper">
        <div className="main-content-wrapper">
          <h1>Login</h1>
          <p>
            Just one more email — a quick confirmation — before you say goodbye
            to overstuffed inboxes for good.
          </p>

          <form
            className="workspace-form"
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
          >
            <div className="input-wrapper">
              <TextField
                id="standard-basic"
                label="Email"
                className="workspace-form__email workspace-form__input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setState({ ...state, email: e.target.value });
                }}
              />
            </div>
            <br />
            <div className="input-wrapper">
              <TextField
                type="password"
                label="Password"
                className="workspace-form__name workspace-form__input pwd-input"
                placeholder="Enter your password"
                onChange={(e) => {
                  setState({ ...state, password: e.target.value });
                }}
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
