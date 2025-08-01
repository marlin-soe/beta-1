import { useState } from "react";
import "./styling/post-form.css";
import monkeyIcon from "../assets/monkey.webp";

function PostForm() {
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");

    const handleTagKeyDown = (e) => {
        if (e.key === "Enter" && tagInput.trim() !== "") {
            e.preventDefault(); // Prevent form submit
            if (!tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            }
            setTagInput("");
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, i) => i !== indexToRemove));
    };


    return (
        <>
            <div className="postFormMainWrapper"> 
                <div className="postFormInnerWrapper">
                    <div className="postFormInnerImageWrapper">
                        <img src={monkeyIcon} alt="" />
                    </div>
                    <form action="" className="postFormInnerActualFormWrapper">
                        <div className="postFormInnerFormWrapper"> 
                            <input type="text" placeholder="Title" id="postFormTitle"/>
                            
                            <div className="postFormTextareaWrapper">
                                <textarea
                                    placeholder="Write your thoughts ..."
                                    id="postFormContent"
                                    maxLength="450"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                                <div className="charCount">{content.length}/450</div>
                            </div>

                            <input type="image" placeholder="image"/>

                            <div className="tagInputWrapper">
                                <span className="tagPrefix">Tags |</span>
                                <div className="tagContainer">
                                    {tags.map((tag, index) => (
                                        <span key={index} className="tagBox">
                                            {tag}
                                            <button type="button" onClick={() => removeTag(index)}>×</button>
                                        </span>
                                    ))}
                                    <div className="tagInputFieldWrapper">
                                        <input
                                            type="text"
                                            value={tagInput}
                                            onChange={(e) => setTagInput(e.target.value)}
                                            onKeyDown={handleTagKeyDown}
                                            placeholder=""
                                            className="tagInput"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="postFormInnerFormPostButtonWrapper">
                                <button>Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PostForm;
