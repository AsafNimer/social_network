import React from "react";
import styles from "./welcome.module.css";
import {Outlet} from "react-router-dom";
import {Footer} from "components/footer/Footer";

const Welcome: React.FC = () => {
    return (
        <>
            <div className={styles.welcome_container}>
                <h1 className={styles.welcome_title}>The Social Experience</h1>
                <Outlet />
                {/* <Outlet /> outlet it replacing the child route/s --> 
                Registration and Login that are nested within Welcome */}
                <Footer />
            </div>
        </>
    );
};

export {Welcome};
