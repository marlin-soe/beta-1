import { useNavigate } from 'react-router-dom';

import styles from "./side-bar-link-individual-bottom.module.css"
import homeIcon from '../../../assets/home.svg';
import videoIcon from '../../../assets/video.svg';
import subjectIcon from '../../../assets/subject.svg';
import messageIcon from '../../../assets/message.svg';
import subscriptionIcon from '../../../assets/subscription.svg';
import defaultIcon from '../../../assets/trash.svg'; 

const iconMap = {
  'Home Page': homeIcon,
  'Video Courses': videoIcon,
  'Subjects': subjectIcon,
  'Messages': messageIcon,
  'Subscriptions': subscriptionIcon
};
const pageDirectories = ['/home', '/videocourses', '/subjects', '/messages', '/subscription']

function SideBarLinkIndividualBottom ({name}) {
    const navigate = useNavigate();
    return (
        name.map((item, index) => {
            const icon = iconMap[item] || defaultIcon;

            return (
                <button key={index} className={styles.SideBarLinkIndividualBottom} onClick={() => navigate(pageDirectories[index])}>
                    <img src={icon} alt={`${item} Icon`} className={styles.icon} />
                    {item}
                </button>
            );
        })
    );
}


export default SideBarLinkIndividualBottom