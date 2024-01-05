import styles from "./App.module.css";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Registration} from "./features/register/Register";
import {Login} from "./features/login/Login";
import {Header} from "components/header/Header";
import {Footer} from "components/footer/Footer";

export const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer />
        </div>
    );
};
