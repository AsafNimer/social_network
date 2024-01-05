import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import {Welcome} from "./features/welcome/Welcome";
import "./App.module.css";

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const loggedOrNot = async () => {
    try {
        const response = await fetch("/user/id.json");
        const data = await response.json();
        console.log("DATA: ", data);

        if (!data.userId) {
            // condition should be "data.userId"
            root.render(<Welcome />);
        } else {
            root.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            );
        }
    } catch (error) {
        console.error(error.message);
    }
};
