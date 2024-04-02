import "./styles__1.css";
import InteractionElement from "./InteractionElement/InteractionElement.tsx";
import ElementsContainer from "./ElementsContainer/ElementsContainer.tsx";
import ArrayContext, { ArrContext, IUser } from "../../ContextElement/ArrayContext.tsx";
import React, { useContext, useEffect, useState } from "react";

const MainWindow = () => {

    const [filteredArray, setFilteredArray] = useState<IUser[]>(useContext(ArrContext).usersArray);

    return (
        <div className="app_">
            <h1 className="app-name_">Contact App</h1>

            <ArrayContext>
                <InteractionElement setFilteredArray={setFilteredArray} />
                <ElementsContainer filteredArray={filteredArray} />
            </ArrayContext>
        </div>
    );
};

export default MainWindow;
