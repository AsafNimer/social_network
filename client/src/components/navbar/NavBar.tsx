import React from "react";
import styles from "./navbar.module.css";
import {Route, NavLink} from "react-router-dom";
import {UserImg} from "components/userimg/UserImg";

const NavBar: React.FC = () => {
    return (
        <>
            <div className="navbar_container">
                <UserImg />
            </div>
        </>
    );
};

export {NavBar};
