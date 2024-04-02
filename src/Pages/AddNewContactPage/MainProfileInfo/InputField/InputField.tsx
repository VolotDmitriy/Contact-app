import React, { FC, useContext} from "react";
import {NewUserContext} from "../../../../ContextElement/AddUserContext.tsx";


interface InputFieldProps {
    name: string;
    label: string;

}


const InputField: FC<InputFieldProps> = ({name, label}) =>{
    const setValueFormInput = useContext(NewUserContext).SetMainProfInfo;
    
    
    const classNameField = "group-input-place " + name;
    return (
        <div className={classNameField}>
            {name !== "description" ?
                <>
                    <input className="input-field" required onChange={e => {
                        setValueFormInput(prev => ({
                            ...prev,
                            name: e.target.value
                        }))
                    }
                    }/>
                    <label className="floating-label">{label}</label>
                </>
                :
                <textarea className="input-field" placeholder={label} onChange={e =>
                    setValueFormInput(prev => ({
                        ...prev,
                        description: e.target.value,
                    }))
                }/>
            }
        </div>
    );
}

export default InputField;