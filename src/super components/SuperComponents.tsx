import React from "react";
import SuperInputText from "./c1-SuperInputText/SuperInputText";
import SuperButton from "./c2-SuperButton/SuperButton";
import SuperCheckbox from "./c3-SuperCheckbox/SuperCheckbox";

export function SuperComponents() {
    return (
        <div style={{display: 'flex'}}>
            <SuperInputText/>
            <SuperButton/>
            <SuperCheckbox/>
        </div>
    )
}