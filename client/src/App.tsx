import styles from "./App.module.css";
import React from "react";
import {Outlet, NavLink} from "react-router-dom";
import {NavBar} from "components/navbar/NavBar";
import {Footer} from "components/footer/Footer";

export const App: React.FC = () => {
    return (
        <div id={styles.App}>
            <header>
                <nav className={styles.nav_container}>
                    <NavBar />
                </nav>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
