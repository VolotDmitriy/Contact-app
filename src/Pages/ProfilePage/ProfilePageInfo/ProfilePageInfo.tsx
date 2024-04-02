import React from "react";
import {IUser} from "../../../ContextElement/ArrayContext.tsx";
import {IUserProps} from "../ProfilePage.tsx";


const ProfilePageInfo = ({user}: IUserProps) => {
    return (
        <div className="profile-info">
            <img
                className="profile-info__image"
                src={user.image}
                alt="Profile Image"
            />
            <p className="profile-info__name">{user.name} {user.surname}</p>
            <p className="profile-info__location">{user.location}</p>
            <a className="profile-info__email" href="">{user.email}</a>
        </div>
    );

}

export default ProfilePageInfo;