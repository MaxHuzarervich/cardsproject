import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from './../login/Login'
import {Registration} from "../registration/Registration";
import {Profile} from "../profile/Profile";
import {Error404} from "../404/404";
import {PassRecovery} from "../password recovery/PassRecovery";
import {EnterNewPass} from "../entering a new password/EnterNewPass";
import {SuperComponents} from "../super components/SuperComponents";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    ERROR404: '/error404',
    PASS_RECOVERY: '/passrecovery',
    ENTER_NEW_PASS: '/enternewpass',
    SUPER_COMPONENTS: '/supercomponents'
}

export function RoutesComponent() {
    return (
        <div>
            <Routes>

                <Route path='/' element={<Navigate to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>

                <Route path={PATH.REGISTRATION} element={<Registration/>}/>

                <Route path={PATH.PROFILE} element={<Profile/>}/>

                <Route path={PATH.PASS_RECOVERY} element={<PassRecovery/>}/>

                <Route path={PATH.ENTER_NEW_PASS} element={<EnterNewPass/>}/>

                <Route path={PATH.SUPER_COMPONENTS} element={<SuperComponents/>}/>

                <Route element={<Error404/>}/>

            </Routes>

        </div>
    )
}
