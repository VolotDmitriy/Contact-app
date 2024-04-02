import "./styles__2.scss"
import MainProfileInfo from "./MainProfileInfo/MainProfileInfo.tsx";
import SecondaryProfileInfo from "./SecondaryProfileInfo/SecondaryProfileInfo.tsx";
import {useNavigate} from "react-router-dom";


const AddNewContactPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };

    return (
            <div className="app1">
                <p className="app-name">Add New Contact</p>

                <MainProfileInfo/>
                <SecondaryProfileInfo/>

                <button className="done-button" onClick={handleClick}>Done</button>
            </div>
    );
}

export default AddNewContactPage;