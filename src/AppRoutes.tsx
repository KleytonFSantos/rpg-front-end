import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPass from "./pages/ForgotPass/ForgotPass";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";



const AppRoutes: React.FC = (): JSX.Element => {
    return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPass />} />
                </Routes>
            </Fragment>
    );
}

export default AppRoutes;