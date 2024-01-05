import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import {Welcome} from "./features/welcome/Welcome";
import {Registration} from "./features/register/Register";
import {Login} from "./features/login/Login";
import {ResetPass} from "./features/resetpass/ResetPass";
import "./App.module.css";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";

const router = createBrowserRouter(
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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// const loggedOrNot = async () => {
//     try {
//         const response = await fetch("/user/id.json");
//         const data = await response.json();
//         console.log("DATA: ", data);

//         if (!data.userId) {
//             root.render(
//                 <React.StrictMode>
//                     <RouterProvider router={router} />
//                 </React.StrictMode>
//             );
//         } else {
//             root.render(<App />);
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// };
