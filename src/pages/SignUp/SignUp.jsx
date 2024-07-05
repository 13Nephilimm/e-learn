import React, { useState } from "react";
import RegisterForm from "../../components/Sections/Pages/SignUp/RegisterForm/RegisterForm";
import LoginForm from "../../components/Sections/Pages/SignUp/LoginForm/LoginForm";
import Layout from "../../components/Layout/Layout";

const SignUp = () => {
  const [register, setRegister] = useState(false);

  return (
    <Layout>
      <section className="login-section">
        <div className="login-container">
          <h1 className="login-heading">
            {register ? "რეგისტრაცია" : "შესვლა"}
          </h1>
          {register ? <RegisterForm /> : <LoginForm />}
          {register ? (
            <p className="account-text">
              უკვე გაქვთ ანგარიში?
              <button
                onClick={() => setRegister(false)}
                className="reg-log-btn"
              >
                შესვლა
              </button>
            </p>
          ) : (
            <p className="account-text">
              არ გაქვთ ანგარიში?
              <button onClick={() => setRegister(true)} className="reg-log-btn">
                რეგისტრაცია
              </button>
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
