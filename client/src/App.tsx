// import styles from "./App.module.css";
// import "./App.css";
import React from "react";
import {Component} from "react";
import {Registration} from "./features/register/Register";

export const App: React.FC = () => {
    return (
        <>
            <div className="App">
                <h1>This is my App</h1>
                <Registration />
            </div>
        </>
    );
};
