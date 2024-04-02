
import React, {ReactNode} from "react";

export interface PopUpProps{
    open: boolean;
    children: ReactNode;
}

/*
    onChange={e => {
                    setValueFormInput(prev => ({
                        ...prev,
                        name: e.target.value
                    }))
                }
                }
    */
const PopUpTags = ({open, setOpen}) =>{

    return (
        open ? (
                <div className="pop-up-container">
                    <input className="pop-up__input-field" required/>
                    <label className="pop-up__floating-label">{"Tag name"}</label>
                    <button className="pop-up__action-button" onClick={() => setOpen(!open)}>Done</button>
                </div>
            )
            :
            null

    )
        ;
}


export default PopUpTags