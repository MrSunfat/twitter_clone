import { Avatar, Button } from '@mui/material';
import avatarImg from '../../../Images/avatar.jpg';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

import './TweetBox.css';
import { useGlobalContext } from '../../../context';
import db from '../../../firebase';
import { useEffect } from 'react';

function TweetBox() {
    // document.title = 'Hello';
    const {
        tweetBox,
        isInputImgOpen,
        setIsInputImgOpen,
        tweetMessage,
        setTweetMessage,
        tweetImg,
        setTweetImg,
        isEmptyTweetMessage,
        setIsEmptyTweetMessage,
        findDateTime,
        isPostUpdate, 
        setIsPostUpdate,
        idPost, setIdPost
    } = useGlobalContext();

    useEffect(() => {
        if (tweetMessage.length > 0) {
            setIsEmptyTweetMessage(false);
        }
      }, [tweetMessage]);
    

    const sendTweet = (e) => {
        e.preventDefault();

        if (tweetMessage.length < 1) {
            setIsEmptyTweetMessage(true);
        } else {
            db.collection('posts').add({
                avatar: 'https://scontent.fhan4-2.fna.fbcdn.net/v/t1.6435-9/46456359_572140446574201_7815103941837848576_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VCKJkcNykuQAX-R7owJ&_nc_ht=scontent.fhan4-2.fna&oh=00_AT-Vqm9_IsmJ0h53_nyUN_0TTgZuIbCaBlVUX4hBS3pjyA&oe=6236D346',
                displayName: 'Tran Danh',
                username: '@TranDanh123',
                verified: true,
                text: tweetMessage,
                image: tweetImg,
                time: findDateTime(),
            });

            setTweetMessage('');
            setTweetImg('');
            setIsInputImgOpen(false);
        }
    };

    const updatePost = (e) => {
        e.preventDefault();
        
        if (tweetMessage.length < 1) {
            setIsEmptyTweetMessage(true);
        } else {
            db.collection('posts').doc(idPost).update({
                text: tweetMessage,
                image: tweetImg,
                time: findDateTime(),
            })

            setTweetMessage('');
            setTweetImg('');
            setIsInputImgOpen(false);
            setIdPost('');
        }

        setIsPostUpdate(false);
    }


    return (
        <div ref={tweetBox} className="tweetBox">
            <form>
                <Avatar src={avatarImg} className="avatar" />
                <div className="tweetBox__input">
                    <input
                        className={`status`}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happeing ?"
                    />

                    {isEmptyTweetMessage && (
                        <p className="tweetMessage__empty">
                            Message is required
                        </p>
                    )}

                    {isInputImgOpen && (
                        <input
                            className="widgets__inputImg status"
                            onChange={(e) => setTweetImg(e.target.value)}
                            value={tweetImg}
                            type="text"
                            placeholder="Enter image URL (Optional)"
                        />
                    )}

                    <div className="status--submit">
                        <div className="media">
                            <ImageOutlinedIcon
                                className="icon"
                                onClick={() => setIsInputImgOpen(!isInputImgOpen)}
                            />
                            <GifBoxOutlinedIcon className="icon" />
                            <PollOutlinedIcon className="icon" />
                            <SentimentSatisfiedOutlinedIcon className="icon" />
                        </div>
                        <Button
                            onClick={!isPostUpdate ? sendTweet : updatePost}
                            className={`tweetBox__tweetButton ${
                                tweetMessage.length > 0 && 'active'
                            }`}
                        >
                            Tweet
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;
