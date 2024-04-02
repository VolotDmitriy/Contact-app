import "./InteractionElement.scss";
import {ArrContext, IUser} from "../../../ContextElement/ArrayContext.tsx";

import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

interface InteractionElementProps {
    setFilteredArray: Dispatch<SetStateAction<IUser[]>>;
}

const InteractionElement: FC<InteractionElementProps> = ({ setFilteredArray }) => {
    const arr: IUser[] = useContext(ArrContext).usersArray;
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();


    useEffect(()=>{
        userNameSearch("");
    }, [arr])
    const userNameSearch = (input: string) => {
        setInputValue(input);
        const val = input === "" ? arr : arr.filter((user) => (user.name + user.surname).toLowerCase().includes(input.toLowerCase()));
        setFilteredArray(val);
    };
    const handleClick = () => {
        navigate(`/add_profile`);
    };

    return (
        <div className="interaction-element">
            <input
                className="search-input"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => userNameSearch(e.target.value)}
            />
            <button className="button tag">Tag</button>
            <button className="button add" onClick={() => handleClick()}>Add</button>
        </div>
    );
};

export default InteractionElement;
