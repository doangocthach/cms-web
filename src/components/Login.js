import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import axios from "../utils/axios";
import "./login.css";

export default () => {
  const [state, setState] = useState({ email: "", pwd: "" });
  // const [state, setState] = useState({ email: "" });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let a = await axios.post("/login", state);
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
                  setState({ ...state, pwd: e.target.value });
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
