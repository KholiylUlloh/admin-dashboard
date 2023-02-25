import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Authorize = async () => {
    try {
      await axios
        .post("http://3.101.30.218:8090/api/v1/auth/sign-in", {
          email,
          password,
        })
        .then((res) => localStorage.setItem("user", res.data.data.accessToken));
      navigate("/orders", { replace: true });
    } catch (e) {
      setError(`${e.response.data.errors[0].errorMsg}`);
    }
  };
  return (
    <Wrapper>
      <Wrapper.Right />
      <Wrapper.Left>
        <div className="login_body">
          <div className="login_titles">
            <h1>Tizimga xush kelibsiz !</h1>
            <p>
              Tizimga kirish uchun, login va parol orqali autentifikatsiya
              jarayonidan o’ting
            </p>
          </div>
          <div className="input_wrap">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              type="text"
              placeholder="Email"
            />
            <hr />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Parol"
            />
          </div>
          <button onClick={Authorize}>Tizimga kirish</button>
        </div>
        <span>{error}</span>
      </Wrapper.Left>
    </Wrapper>
  );
};

export default Login;
