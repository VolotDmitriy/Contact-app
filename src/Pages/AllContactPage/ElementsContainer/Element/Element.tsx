import ElementTags from "../ElementTags/ElementTags.tsx";
import { ReactNode } from "react";
import { IUser } from "../../../../ContextElement/ArrayContext.tsx";
import { useNavigate } from "react-router-dom";

interface IElementProps {
    user: IUser;
    elementKey: number;
}

const Element = ({ user, elementKey }: IElementProps): ReactNode => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/profile/${elementKey}`);
    };

    return (
        <div className="element" onClick={handleClick}>
            <img className="element-icon" src={user.image} alt="User Icon" />
            <p className="element-name">{`${user.name} ${user.surname}`}</p>
            <ElementTags tags={user.tags} />
        </div>
    );
};

export default Element;
