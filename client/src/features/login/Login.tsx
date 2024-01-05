import React from "react";
import styles from "./login.module.css";
import {Component} from "react";
import {LoginType} from "../../types/types";
import {Link} from "react-router-dom";

class Login extends Component {
    constructor(props: LoginType) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false
        };
    }

    async handleLoginSubmit() {
        try {
            const response = await fetch("login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            });
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log("Error is:", err);
        }
    }

    render() {
        return (
            <div className={styles.login_container}>
                <div className={styles.login_form_container}>
                    <form className={styles.login_form} action="/" method="post">
                        <input
                            className={styles.login_input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className={styles.login_input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </form>
                    <div className={styles.login_btn_container}>
                        <button
                            type="submit"
                            onClick={this.handleLoginSubmit}
                            className={styles.login_btn}
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className={styles.par_container}>
                    <p className={styles.forgot_pass_par}>
                        <Link to="/reset">Forgot password?</Link> | <Link to="/">Sign-Up</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export {Login};
