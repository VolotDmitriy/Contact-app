import React, { useContext, useEffect, useState} from 'react';
import "./styles.scss"
import {ArrContext, IUser} from "../../ContextElement/ArrayContext.tsx";
import {Link, useParams} from "react-router-dom";
import ProfilePageInfo from "./ProfilePageInfo/ProfilePageInfo.tsx";
import AddNewContactPage from "../AddNewContactPage/AddNewContactPage.tsx";
import AdditionalProfilePageInfo from "./AdditionalProfilePageInfo/AdditionalProfilePageInfo.tsx";


export interface IUserProps{
    user : IUser;
}

const ProfilePage = () => {

    const arr: IUser[] = useContext(ArrContext).usersArray;
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<IUser>();
    //console.log('ProfilePage rendered' + userId);

    const userUpload = () =>{
        const foundUser = arr.find((value, i) => {
            //console.log("value of = " +(userId)+ `Checking user at index ${i}, userId: ${userId}`);
            return i === Number(userId);
        });
        //console.log("start " + userId + " user = " + foundUser);
        if (foundUser) {
            setUser(foundUser);
        }
    }



    if (!user) {
        userUpload();
        return (
            <div className="app">
                <p>User not found</p>
            </div>
        );
    }
    console.log("user = "+ user);

    //console.log('userId:', userId, 'user:', user);
    return (
        <div className="app">
            <ProfilePageInfo user={user}/>
            <AdditionalProfilePageInfo user={user}/>
        </div>
    );
};

export default ProfilePage;
