import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from "react";
import {IUser, userLinks} from "./ArrayContext.tsx";


interface newUserContextProps{
    children: ReactNode;
}

export interface mainProfInfoProps {
    name?: string;
    surname?: string;
    image?: string;
    email?: string;
    location?: string;
    description?: string;
}

interface secProfInfoProps {
    tags?: string[];
    links?: userLinks[];
}


export interface newUserContextValue {
    newUser?: IUser;
    setNewUser: Dispatch<SetStateAction<IUser | undefined>>;
    SetMainProfInfo: Dispatch<SetStateAction<mainProfInfoProps | undefined>>;
    SetSecProfInfo: Dispatch<SetStateAction<secProfInfoProps | undefined>>;

}



const defaultValue: newUserContextValue = {
    newUser: undefined,
    setNewUser: () => {},
    SetMainProfInfo: () => {},
    SetSecProfInfo: () => {},

};

console.log("Default Value:", defaultValue);

export const NewUserContext = createContext<newUserContextValue>(defaultValue);

const AddUserContext = ({ children } : newUserContextProps) => {

    const [newUser, setNewUser] = useState<IUser>();
    const [mainProfInfo, SetMainProfInfo] = useState<mainProfInfoProps>();
    const [secProfInfo, SetSecProfInfo] = useState<secProfInfoProps>();

    useEffect(() => {
        console.log("MAIN PROF INFO updated:", mainProfInfo);
    }, [mainProfInfo]);


    const contextValue: newUserContextValue = {
        newUser,
        setNewUser,
        SetMainProfInfo,
        SetSecProfInfo,
    };

    console.log("MAIN PROF INFO " + mainProfInfo);
    return (
        <NewUserContext.Provider value={contextValue}>
            {children}
        </NewUserContext.Provider>
    );
};

export default AddUserContext;