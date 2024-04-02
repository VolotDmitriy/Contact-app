
import {IUser} from "../../../ContextElement/ArrayContext.tsx";
import Element from "./Element/Element.tsx";
import {FC} from "react";

interface ElementsContainerProps {
    filteredArray: IUser[];
}
const ElementsContainer: FC<ElementsContainerProps> = ({filteredArray}) => {

    return (
        <div className="elements-container">
            {filteredArray.map((user, index) => {
                    return <Element key={index} elementKey={index} user={user}/>
            })}
        </div>
    );
}

export default ElementsContainer;