import {Link} from "react-router-dom";
import React from "react";
import {IUserProps} from "../ProfilePage.tsx";

const AdditionalProfilePageInfo = ({user}: IUserProps) =>{
    return (
        <div className="profile-info-additiontal">
            <p className="profile-info__desc">{user.description}</p>
            <div className="user-links">
                {user.links.map((value) => (
                    <Link className="link" to={value.link}>
                        {value.linkName}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AdditionalProfilePageInfo;