import { Avatar } from '@mui/material';
import './Profile.css';

function Profile({ avatar, displayName, username, bg }) {
    return (
        <div className="profile">
            <img src={bg} alt={displayName} className="profile__bg" />
            <div className="profile__main">
                <Avatar
                    src={avatar}
                    alt={displayName}
                    className="profile__avatar"
                    sx={{ width: 145, height: 145 }}
                />
                <h2 className="profile__displayName">{displayName}</h2>
                <p className="profile___username">{`@${username}`}</p>
            </div>
        </div>
    );
}

export default Profile;
