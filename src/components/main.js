import { Route, Routes } from "react-router-dom";
import React from 'react';
import Guitarras from "./Guitarras";
import Violoes from "./Violoes";
import Contato from "./Contato";
import Login from "./Login";
import Registrar from "./Register";


const Main = () => (
    <Routes>
        <Route exact path="/Guitarras" element={<Guitarras/>} />
        <Route exact path="/Violoes" element={<Violoes/>} />
        <Route exact path="/Contato" element={<Contato/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Registrar" element={<Registrar/>} />
    </Routes>

)

export default Main;
