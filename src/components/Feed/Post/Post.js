import { forwardRef } from 'react';
import Avatar from '@mui/material/Avatar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useGlobalContext } from '../../../context';
import './Post.css';
import db from '../../../firebase';

function Post({
    id,
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    time,
    heart,
}) {
    const {
        tweetBox,
        setTweetMessage,
        setTweetImg,
        setIdPost,
        setIsPostUpdate,
        setIsInputImgOpen,
    } = useGlobalContext();

    const deletePost = () => {
        db.collection('posts').doc(id).delete();
    };

    const editPost = () => {
        // tweetBox.current.scrollHeight = '50px';
        setTweetMessage(text);
        setTweetImg(image);
        setIsInputImgOpen(true);
        setIsPostUpdate(true);
        setIdPost(id);
    };

    const favoriteUpdate = () => {
        db.collection('posts').doc(id).update({
            heart: !heart,
        });
    };

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar alt={displayName} src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{' '}
                            <span className="post__headerSpecial">
                                {verified && (
                                    <VerifiedUserIcon className="post__badge" />
                                )}
                                {username}
                            </span>
                        </h3>
                        <p>{time}</p>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt={image} />
                <div className="post__footer">
                    <EditIcon
                        fontSize="small"
                        onClick={editPost}
                        className="editIcon"
                    />

                    {heart ? (
                        <FavoriteIcon
                            fontSize="small"
                            className="heartIcon active"
                            onClick={favoriteUpdate}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            fontSize="small"
                            className="heartIcon"
                            onClick={favoriteUpdate}
                        />
                    )}

                    <DeleteForeverIcon
                        fontSize="small"
                        onClick={deletePost}
                        className="deleteIcon"
                    />
                </div>
            </div>
        </div>
    );
}

export default Post;
