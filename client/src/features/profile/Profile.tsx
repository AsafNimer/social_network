import React from "react";
import styles from "./profile.module.css";

const Profile: React.FC = () => {
    return (
        <>
            <div className={styles.profile_container}>Hello from Profile page!</div>
        </>
    );
};

export {Profile};
