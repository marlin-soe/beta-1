import RightSideBarFriendIndividualButton from './right-side-bar-friend-individual-button';
import './right-side-bar-friend.css'

const friendList = ['Marlin', 'Khagga', 'Bhone Khant', 'Tomi', 'Aung Nyein Chan Soe', 'Shwe Yee']
function RightSideBarFriend () {
    return (
        <div className="RightSideBarFriendWrapper">
            <p>My Friend</p>
            <hr />
            <div className="FriendButtons">
                <RightSideBarFriendIndividualButton friendList={friendList}/>
                
            </div>
        </div>

    );
}

export default RightSideBarFriend