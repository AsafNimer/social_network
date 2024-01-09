import React from "react";
import styles from "./err.module.css";

const ErrorMsg: React.FC = () => {
    return (
        <>
            <div className="err_msg_container">
                <h1>ERROR MESSAGE!</h1>
            </div>
        </>
    );
};

export {ErrorMsg};
