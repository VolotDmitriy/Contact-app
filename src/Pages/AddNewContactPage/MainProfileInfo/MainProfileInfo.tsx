import React from "react";
import InputField from "./InputField/InputField.tsx";


const MainProfileInfo = () => {


    return (
        <div className="main-profile-info">
            <InputField name={"name"} label={"Username"}/>
            <InputField name={"surname"} label={"Surname"}/>
            <InputField name={"location"} label={"Location"}/>
            <InputField name={"email"} label={"Email"}/>
            <InputField name={"description"} label={"Description"}/>
        </div>
    )
}

export default MainProfileInfo;