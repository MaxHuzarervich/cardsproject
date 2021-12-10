import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./RouteComponent";

export function Header() {
    return (
        <div>

            <span><NavLink to={PATH.LOGIN}>Login</NavLink></span>

            <span><NavLink to={PATH.REGISTRATION}>Registration</NavLink></span>

            <span><NavLink to={PATH.PROFILE}>Profile</NavLink></span>

            <span><NavLink to={PATH.ERROR404}>Error404</NavLink></span>

            <span><NavLink to={PATH.PASS_RECOVERY}>Pass recovery</NavLink></span>

            <span><NavLink to={PATH.ENTER_NEW_PASS}>Enter new pass</NavLink></span>

            <span><NavLink to={PATH.SUPER_COMPONENTS}>Super components</NavLink></span>

        </div>
    )
}