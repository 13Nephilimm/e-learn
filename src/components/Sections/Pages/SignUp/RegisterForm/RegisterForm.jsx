import React, { useState } from "react";
import "./RegisterForm.css";
import { FaUserTie } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

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
        <FaUserTie className="login-icon" />
        მეილი
      </label>
      <input
        placeholder="შეიყვანეთ თქვენი მეილი"
        type="text"
        name="username"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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
      <label>როლი</label>
      <select
        name="role"
        onChange={(e) => {
          setRole(e.target.value);
        }}
        required
      >
        <option value="admin">ადმინი</option>
        <option value="user">სტუდენტი</option>
        <option value="user">კომპანია</option>
        <option value="user">ლექტორი</option>
        <option value="user">რექრუითერი</option>
      </select>

      <button className="btn-login" type="submit">
        შესვლა
      </button>
    </form>
  );
};

export default RegisterForm;
