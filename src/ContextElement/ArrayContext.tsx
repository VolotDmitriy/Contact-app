import {createContext, ReactNode, useEffect, useState} from "react";
import axios, { AxiosResponse } from 'axios';



interface ArrayContextProps {
    children: ReactNode;
}
export interface userLinks {
    linkName: string;
    link: string;
}
export interface IUser {
    name: string;
    surname: string;
    image: string;
    email: string;
    location: string;
    description: string;

    tags: string[];
    links: userLinks[];
}
interface ArrayContextValue {
    usersArray: IUser[];
    userTags: Set<string>;
    addUser: (user: IUser) => void;
}

const defaultValue: ArrayContextValue = {
    usersArray: [],
    userTags: new Set(),
    addUser: () => {},
};

export const ArrContext = createContext<ArrayContextValue>(defaultValue);

const ArrayContext = ({ children } : ArrayContextProps) => {
    const [ usersArray, setUsersArray] = useState<IUser[]>([]);
    // useState to var
    const userTags = new Set<string>;
    //const [ userTags, setUserTags] = useState<Set<string>>(new Set());

    useEffect(() => {
        //rewr fetch to func refresh() and use in addition
        fetch("/UsersInfo.json")
            .then((response) => response.json())
            .then((data) => {
                setUsersArray(data);
                addAllTags(data);
            })
            .catch((error) => console.error("Error fetching default data:", error))
    }, []);


    // rewr func to Array.filter

    /*const addAllTags = (arr: IUser[]) => {
        arr.forEach((value) => {
            ////////////value.tags.forEach((tag) => setUserTags(prev => prev.add(tag)));
        });
    };*/

    const addAllTags = (arr: IUser[]) => {
        arr.forEach((value) => {
            value.tags.forEach((tag) => userTags.add(tag));
        });
    }
    const addUser = (user: IUser) =>{

        axios.post("/UsersInfo", {user})
            .then(response => {
                // rewr
                setUsersArray([...usersArray, user]);

                console.log("User added successfully:", response.data);
            })
            .catch(error => {
                console.error("Error adding user:", error);
            });
    }

    const contextValue: ArrayContextValue = {
        usersArray,
        userTags,
        addUser,
    };

    return (
        <ArrContext.Provider value={contextValue}>
            {children}
        </ArrContext.Provider>
    );
};

export default ArrayContext;