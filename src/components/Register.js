import React, { useState } from "react";
import "../css/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleRegister = () => {
    // Adicione sua lógica de registro aqui
    // Se o registro for bem-sucedido, defina registerSuccess como true
    setRegisterSuccess(true);
  };

  return (
    <div className="register-container">
      {registerSuccess && (
        <p className="success-message">Registro bem-sucedido!</p>
      )}
      <h2>Registro</h2>
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
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default Register;
