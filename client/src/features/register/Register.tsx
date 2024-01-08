import React from "react";
import styles from "./register.module.css";
import {Component} from "react";
import {RegistrationStateType, RegistrationPropsType} from "../../types/types";
import {Link, redirect} from "react-router-dom";

class Registration extends Component<RegistrationPropsType, RegistrationStateType> {
    constructor(props: RegistrationPropsType) {
        super(props);
        this.state = {
            first: "",
            last: "",
            email: "",
            password: "",
            error: false
        };
        this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    }

    async handleRegistrationSubmit() {
        const {first, last, email, password, error} = this.state;
        try {
            const response = await fetch("/registration.json", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            });
            const data = await response.json();
            console.log(data);
            if (data.success) {
                redirect("/profile");
            } else {
                this.setState({error: true});
            }
        } catch (err) {
            console.log("Error is:", err);
        }
    }
    render() {
        return (
            <div className={styles.register_container}>
                <div className={styles.form_container}>
                    <form className={styles.register_form} action="/" method="post">
                        <input
                            className={styles.register_input}
                            name="first"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                        <input
                            className={styles.register_input}
                            name="last"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                        <input
                            className={styles.register_input}
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className={styles.register_input}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </form>
                    <div className={styles.btn_container}>
                        <button
                            type="submit"
                            onClick={this.handleRegistrationSubmit}
                            className={styles.register_btn}
                        >
                            Get Started
                        </button>
                    </div>
                    <p className={styles.already_par}>
                        Already a member? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export {Registration};
