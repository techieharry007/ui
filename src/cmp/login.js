import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  let { username, password } = user;
  return (
    <>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              value={username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name=""
              required=""
              value={password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <label>Password</label>
          </div>

          <div class="button-form">
            <a
              id="submit"
              href="#"
              onClick={() => {
                props.validateUser()
              }}
            >
              Submit
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
