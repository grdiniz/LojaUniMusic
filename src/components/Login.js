import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Adicione sua lógica de autenticação aqui
    // Se o login for bem-sucedido, defina loginSuccess como true
    setLoginSuccess(true);
  };

  return (
    <div className="login-container">
      {loginSuccess && <p className="success-message">Login bem-sucedido!</p>}
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
