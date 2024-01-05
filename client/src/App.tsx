import styles from "./App.module.css";
import React from "react";
import {Route, NavLink} from "react-router-dom";
import {NavBar} from "components/navbar/NavBar";
import {Footer} from "components/footer/Footer";

export const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <header>
                <nav>
                    <NavBar />
                </nav>
            </header>
            <main className={styles.main}>MAIN SECTION OF APP COMPONENT</main>
            <Footer />
        </div>
    );
};
