import React from "react";
import styles from "./welcome.module.css";
import {Registration} from "../register/Register";
import {Login} from "../login/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Welcome: React.FC = () => {
    return (
        <>
            <div className={styles.welcome_container}>
                <h1 className={styles.welcome_title}>The Social Experience</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export {Welcome};
