import React from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <nav></nav>
            </header>
        </>
    );
};

export {Header};
