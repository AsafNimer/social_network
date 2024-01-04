import styles from "./welcome.module.css";
import { Registration } from "../register/Register";
// import { Login } from "../login/Login";

const Welcome: React.FC = () => {
  return (
    <>
      <div className={styles.welcome_container}>
        <h1 className={styles.welcome_title}>The Social Experience</h1>
        <Registration />
        {/* <Login /> */}
      </div>
    </>
  );
};

export { Welcome };
