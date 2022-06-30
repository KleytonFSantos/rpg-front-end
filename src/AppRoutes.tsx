import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";



const AppRoutes: React.FC = (): JSX.Element => {
    return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Fragment>
    );
}

export default AppRoutes;