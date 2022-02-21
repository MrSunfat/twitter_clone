import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import MoreIcon from '@mui/icons-material/More';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';
import SidebarOption from './SidebarOption';
import TweetAccount from './TweetAccount';
import './Sidebar.css';

function Sidebar() {
    const options = [
        {
            name: 'home',
            icon: HomeOutlinedIcon,
            activeIcon: HomeIcon,
        },
        {
            name: 'explore',
            icon: SearchOutlinedIcon,
            activeIcon: FindInPageIcon,
        },
        {
            name: 'notifications',
            icon: NotificationsNoneOutlinedIcon,
            activeIcon: NotificationsIcon,
        },
        {
            name: 'messages',
            icon: EmailOutlinedIcon,
            activeIcon: EmailIcon,
        },
        {
            name: 'bookmarks',
            icon: BookmarkBorderOutlinedIcon,
            activeIcon: BookmarkIcon,
        },
        {
            name: 'lists',
            icon: ListAltOutlinedIcon,
            activeIcon: SummarizeIcon,
        },
        {
            name: 'profile',
            icon: PermIdentityOutlinedIcon,
            activeIcon: PersonIcon,
        },
        {
            name: 'more',
            icon: MoreHorizOutlinedIcon,
            activeIcon: MoreIcon,
        },
    ];

    const { activeOption, setActiveOption } = useGlobalContext();

    return (
        <div className="sidebar">
            {/* twitter icon */}
            <Link to="/home" onClick={() => setActiveOption('home')}>
                <TwitterIcon className="sidebar__twitterIcon" />
            </Link>

            {options.map((option, index) => {
                const { name, icon, activeIcon } = option;
                return name !== 'more' ? (
                    <Link to={`/${name}`} key={index}>
                        <SidebarOption
                            Icon={icon}
                            ActiveIcon={activeIcon}
                            text={name}
                            active={name === activeOption}
                            selectOption={() => setActiveOption(name)}
                        />
                    </Link>
                ) : (
                    <SidebarOption
                        key={index}
                        Icon={icon}
                        ActiveIcon={activeIcon}
                        text={name}
                        active={name === activeOption}
                    />
                );
            })}

            <Button variant="outlined" className="sidebar__tweet meta" fullWidth>
                Tweet
            </Button>

            <Button variant="outlined" className="sidebar__tweet simple" fullWidth>
                +
            </Button>

            <TweetAccount />
        </div>
    );
}

export default Sidebar;
