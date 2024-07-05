import React, { useState } from "react";
import "./LoginForm.css";
import { FaUserTie } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="login-form">
      <label>
        <FaUserTie className="login-icon" />
        სახელი
      </label>
      <input
        placeholder="შეიყვანეთ თქვენი სახელი"
        type="text"
        name="username"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <label>
        <RiLockPasswordFill className="login-icon" />
        პაროლი
      </label>
      <input
        name="password"
        placeholder="შეიყვანეთ თქვენი პაროლი"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button className="btn-login" type="submit">
        შესვლა
      </button>
    </form>
  );
};

export default LoginForm;
