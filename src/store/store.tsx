import {combineReducers, createStore} from "redux";
import {loginReducer} from "./LoginReducer";
import {registrationReducer} from "./RegistrationReducer";
import {enternewpassReducer} from "./EnterNewPassReducer";
import {profileReducer} from "./ProfileReducer";
import {passrecoveryReducer} from "./PassRecoveryReducer";

export const reducers = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    passrecovery: passrecoveryReducer,
    enternewpass: enternewpassReducer,
    profile: profileReducer
})

export const store = createStore(reducers)


export type AppStoreType = ReturnType<typeof reducers>

// // @ts-ignore
// window.store = store // for dev
