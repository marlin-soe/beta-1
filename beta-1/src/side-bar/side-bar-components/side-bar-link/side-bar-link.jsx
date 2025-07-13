import SideBarUniversalButton from "../side-bar-universal-button";
import SideBarLinkIndividualBottom from "./side-bar-link-individual-bottom";
import './side-bar-link.css'


const pages = ['Home Page', 'Video Courses', 'Subjects', 'Messages', 'Subscriptions'];


function SideBarLink () {
    return (
        // SideBarLinkWrapper
        <div className="SideBarLinkWrapper">
            <SideBarLinkIndividualBottom name={pages}/>
            <SideBarUniversalButton name='Quests'/>
        </div>
        
    );
}

export default SideBarLink