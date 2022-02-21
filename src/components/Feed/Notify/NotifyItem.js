import { Avatar } from '@mui/material';
import './NotifyItem.css';

function NotifyItem({ avatar, name, text }) {
    return (
        <div className="notifyItem">
            <Avatar
                src={avatar}
                className="notifyItem__avatar"
                sx={{ width: 35, height: 35 }}
            />
            <div className="notifyItem__content">
                <h3 className="notifyItem__name">{name}</h3>
                <p className="notifyItem__text">{text}</p>
            </div>
        </div>
    );
}

export default NotifyItem;
