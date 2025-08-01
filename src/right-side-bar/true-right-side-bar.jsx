import RightSideBarFriend from './right-side-bar-components/right-side-bar-friend/right-side-bar-friend';
import RightSideBarGoogleAds from './right-side-bar-components/right-side-bar-google-ads/right-side-bar-google-ads';
import RightSideBarQuote from './right-side-bar-components/right-side-bar-quote/right-side-bar-quote';
import './true-right-side-bar.css'

function TrueRightSideBar () {
    return (
        <div className="TrueRightSideBarWrapper">
            <RightSideBarFriend/>
            <RightSideBarQuote/>
            <RightSideBarGoogleAds/>

        </div>
    );

}

export default TrueRightSideBar