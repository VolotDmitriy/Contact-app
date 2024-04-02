import {Dispatch, FC, ReactNode, SetStateAction} from "react";

interface SelectSecParamProps {
    children: ReactNode;
    name: string;
    setOpen: Dispatch<SetStateAction<boolean>>
}

const SelectSecParam: FC<SelectSecParamProps> = ({children, name, setOpen}) => {

    return (
        <div className="add-container">
            <p className="addition-element">Add New {name}</p>
            <div className="container">
                <button className="action-button" onClick={() => setOpen(true)}>Create</button>
                <button className="action-button">Select</button>
            </div>

            {children}
        </div>
    );
}

export default SelectSecParam;