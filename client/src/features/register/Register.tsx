import styles from "./register.module.css";
import { Component } from "react";
import { RegistrationType } from "../../types/types";
import { Link } from "react-router-dom";

class Registration extends Component {
  constructor(props: RegistrationType) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      password: "",
      error: false,
    };
  }

  async handleRegistrationSubmit() {
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });
      const data = await response.json();
      console.log(data);
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
        </div>
        <p className={styles.already_par}>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}

export { Registration };
