import styles from "./App.module.css";
import React from "react";
import {Registration} from "./features/register/Register";
import {Login} from "./features/login/Login";
import {Welcome} from "./features/welcome/Welcome";
import {Routes, Route} from "react-router-dom";

export const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <nav></nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Welcome />}>
                        <Route path="" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </main>
            <footer>
                <div className="footer_par_container">
                    <p className="footer_par">Social © 2023</p>
                </div>
            </footer>
        </div>
    );
};
