import SideBarLink from "./side-bar-components/side-bar-link/side-bar-link";
import SideBarSubProfile from "./side-bar-components/side-bar-sub-profile/side-bar-sub-profile";
import './true-side-bar.css'

function TrueSideBar () {
    return (
        // class name for the outer div of TrueSideBar = TrueSideBarWrapper
        <div className="TrueSideBarWrapper">
            <div className="TrueSideBarWebsiteNameWrapper">
                <p>Website Name</p>
            </div>
            
            <hr />
            <SideBarLink/>
            <hr />
            <SideBarSubProfile/>
            <hr />

        </div>
    );
}

export default TrueSideBar