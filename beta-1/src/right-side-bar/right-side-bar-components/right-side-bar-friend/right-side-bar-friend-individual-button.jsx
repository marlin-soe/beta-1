import styles from './right-side-bar-friend-individual-button.module.css';
import monkeyIcon from '../../../assets/monkey.webp';

function RightSideBarFriendIndividualButton ({friendList}) {
    return (
        friendList.map((friendName, index) => {
            return (
                <button key={index} className={styles.RightSideBarFriendIndividualButton}>
                    <img src={monkeyIcon} alt="Trash Icon"/>
                    {friendName}
                </button>
            );
        })
    );

}

export default RightSideBarFriendIndividualButton;
