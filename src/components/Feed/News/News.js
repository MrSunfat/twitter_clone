import Avatar from '@mui/material/Avatar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './News.css';

function News({ displayName, avatar, verified, text, image }) {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    };
    return (
        <div style={styles} className="news">
            <div className="news__container">
                <div className="news__header">
                    <Avatar alt={displayName} src={avatar} sx={{ height: 18, width: 18 }}/>
                    <h4>{displayName}</h4>
                    {verified && <VerifiedUserIcon className="news__badge" />}
                </div>
                <p className="news__content">{text}</p>
            </div>
        </div>
    );
}

export default News;
