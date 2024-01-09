import React from "react";
import styles from "./welcome.module.css";
import {Outlet} from "react-router-dom";
import {Footer} from "components/footer/Footer";

const Welcome: React.FC = () => {
    return (
        <>
            <div id={styles.welcome_container}>
                <h1 className={styles.welcome_title}>The Social Experience</h1>
                <Outlet />
                {/* <Outlet /> outlet represents the child route (Registration and
                Login) that are nested within Welcome. Routes are specified in
                index.tsx and "Outlet" specifies WHERE inside the parant those
                routes (Registration, Login, ResetPass) should be rendered */}
                <Footer />
            </div>
        </>
    );
};

export {Welcome};
