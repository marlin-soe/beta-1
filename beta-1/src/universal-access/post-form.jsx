import "./styling/post-form.css"
import monkeyIcon from '../assets/monkey.webp';

function PostForm () {
    return (
        <>
            <div className="postFormMainWrapper"> 
                <div className="postFormInnerWrapper">
                    <div className="postFormInnerImageWrapper">
                        <img src={monkeyIcon} alt="" />
                    </div>
                    <form action="">
                        <div className="postFormInnerFormWrapper"> 
                            <input type="text" placeholder="Title" id="postFormTitle"/>
                            <input type="text" placeholder="Write your thoughts ..." id="postFormContent" maxLength="450"/>
                            <input type="image" placeholder="image"/>
                            <input type="text" placeholder="Tags  |" id="postFormTags"/>
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

export default PostForm

