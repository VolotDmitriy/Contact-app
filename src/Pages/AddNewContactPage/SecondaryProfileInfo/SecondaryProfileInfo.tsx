import TagsContainer from "./SelectSecParam/TagsContainer/TagsContainer.tsx";
import SelectSecParam from "./SelectSecParam/SelectSecParam.tsx";
import LinksContainer from "./SelectSecParam/LinksContainer/LinksContainer.tsx";
import PopUpTags from "./PopUpElements/PopUpTags.tsx";
import {useState} from "react";


const SecondaryProfileInfo = () => {
    const [openTags, setOpenTags] = useState(false);
    const [openLinks, setOpenLinks] = useState(false);
    return (
        <div className="secondary-profile-info">
            <SelectSecParam name={"Tag"} setOpen={setOpenTags}>
                <PopUpTags open={openTags} setOpen={setOpenTags}/>
                <TagsContainer />
            </SelectSecParam>

            <SelectSecParam name={"Link"} setOpen={setOpenLinks}>
                <PopUpTags open={openLinks} setOpen={setOpenLinks}/>
                <LinksContainer/>
            </SelectSecParam>

        </div>

    );
}

export default SecondaryProfileInfo