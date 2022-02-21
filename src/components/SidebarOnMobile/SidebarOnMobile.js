import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import { useGlobalContext } from '../../context';
import SidebarOMOption from './SidebarOMOption';
import { Link } from 'react-router-dom';
import './SidebarOnMobile.css';

function SidebarOnMobile() {
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
    ];

    const { activeOption, setActiveOption } = useGlobalContext();

    return (
        <div className="sidebarOnMobile">
            <div className="sidebarOnMobile__container">
                {options.map((option, index) => {
                    const { name, icon, activeIcon } = option;
                    return (
                        <Link to={`/${name}`} key={index}>
                            <SidebarOMOption
                                Icon={icon}
                                ActiveIcon={activeIcon}
                                name={name}
                                active={name === activeOption}
                                selectOption={() => setActiveOption(name)}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default SidebarOnMobile;
