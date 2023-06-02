import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
    return(
        <>
        <navbar/>
        <Outlet/>/*Spits out the component routed*/
        </>
    );
};

export default Layout;