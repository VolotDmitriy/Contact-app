import {ReactNode} from "react";

export interface IElementTagsProps {
    tags: string[];
}
const ElementTags = (props: IElementTagsProps): ReactNode =>{
    return (

        <div className="element-tags">
            {props.tags.map((a: string) => (
                    <div className="element-tag">
                        <p className="element-tag-name">{a}</p>
                    </div>
                )
            )}
        </div>

    );
}

export default ElementTags;