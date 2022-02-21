import {
    Feed,
    FeedHeader,
    Post,
    TweetBox,
    Widgets,
    InputWidget,
    Trends,
    FamousPersons,
} from '../components';
import { useGlobalContext } from '../context';
// import FlipMove from 'react-flip-move';
// import avatarImg from '../Images/avatar.jpg';
// import db from '../firebase';
// import { useEffect } from 'react';

function HomePage() {
    document.title = 'Home / Twitter Clone';

    const { posts } = useGlobalContext();

    // useEffect(() => {
    //     // posts
    //     db.collection('posts').onSnapshot((snapshot) => {
    //         setPosts(snapshot.docs.map((doc) => doc.data()));
    //         // querySnapshot.forEach((doc) => {
    //         //     console.log(`${doc} => ${doc.data()}`);
    //         // });
    //     });
    // });

    return (
        <>
            {/* Feed */}
            <Feed>
                {/* header */}
                <FeedHeader>Home</FeedHeader>

                {/* tweetbox */}
                <TweetBox />

                {/* post */}
                {posts.map((post, index) => {
                    const {
                        id,
                        displayName,
                        username,
                        verified,
                        text,
                        image,
                        avatar,
                        time,
                        heart,
                    } = post;

                    return (
                        <Post
                            key={index}
                            id={id}
                            displayName={displayName}
                            username={username}
                            verified={verified}
                            text={text}
                            image={image}
                            avatar={avatar}
                            time={time}
                            heart={heart}
                        />
                    );
                })}
            </Feed>

            {/* widgets */}
            <Widgets topElement={<InputWidget />}>
                <Trends />
                <FamousPersons />
            </Widgets>
        </>
    );
}

export default HomePage;
