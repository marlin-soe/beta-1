import './side-bar-sub-profile.css'
import monkeyIcon from '../../../assets/monkey.webp';
import SideBarUniversalButton from '../side-bar-universal-button';

function SideBarSubProfile () {
    return (
        <div className="SideBarSubProfileWrapper">
            <img src={monkeyIcon} alt="Trash Icon"/>
            <div className='SideBarSubProfileUsernameWrapper'>
                <p>@marlin</p>
                <p>45 friends - 8 posts</p>

            </div>
    
            <div className='SideBarSubProfileInnerWrapper'>
                <div className='SideBarSubProfileInnerIndividualWrapper'>
                    <p>Membership Type</p>
                    <p>Premium</p>
                </div>
                <div className='SideBarSubProfileInnerIndividualWrapper'>
                    <p>Member Since</p>
                    <p>Nov 2, 2023</p>
                </div>
                <div className='SideBarSubProfileInnerIndividualWrapper'>
                    <p>Account Role</p>
                    <p>Student</p>
                </div>

            </div>
            <SideBarUniversalButton name='My Dashboard'/>
        </div>
    );
}

export default SideBarSubProfile