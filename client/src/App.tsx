import styles from "./App.module.css";
import React from "react";
import {Route, Link} from "react-router-dom";
import {Header} from "components/header/Header";
import {Footer} from "components/footer/Footer";

export const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>MAIN SECTION OF APP COMPONENT</main>
            <Footer />
        </div>
    );
};
