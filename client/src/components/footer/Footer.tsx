import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_par_container}>
                    <p className={styles.footer_par}>Social © 2023</p>
                </div>
            </footer>
        </>
    );
};

export {Footer};
