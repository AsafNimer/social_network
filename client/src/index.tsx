import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import {Welcome} from "./features/welcome/Welcome";
import {Registration} from "./features/register/Register";
import {Login} from "./features/login/Login";
import {ResetPass} from "./features/resetpass/ResetPass";
import {Profile} from "./features/profile/Profile";
import "./App.module.css";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate
} from "react-router-dom";

const WelcomeRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Welcome />}>
            <Route index element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<ResetPass />} />
            {/*A route with index attr is a Route that uses the "index" prop instead of
            a "path" prop and is special because it renders on its parent’s path*/}
        </Route>
    )
);

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="profile" element={<Profile />} />
        </Route>
    )
);

export const loggedOrNot = () => {
    fetch("/profile/id")
        .then((response) => response.json())
        .then((data) => {
            if (!data.userId) {
                ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
                    <React.StrictMode>
                        <RouterProvider router={WelcomeRouter} />
                    </React.StrictMode>
                );
            } else {
                ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
                    <React.StrictMode>
                        <RouterProvider router={AppRouter} />
                    </React.StrictMode>
                );
            }
        });
};

loggedOrNot();
