import { useEffect } from 'react';
import {
    Feed,
    Post,
    News,
    Widgets,
    InputWidget,
    FamousPersons,
    Trends,
} from '../components';
import { useGlobalContext } from '../context';

function ExplorePage() {
    const { setActiveOption, posts } = useGlobalContext();

    useEffect(() => {
        setActiveOption('explore');
    }, []);

    document.title = 'Explore / Twitter Clone';

    return (
        <>
            <Feed>
                <InputWidget />
                <News
                    displayName="Popsugar"
                    avatar="https://pbs.twimg.com/profile_images/1462790600101711878/iyNiax7b_400x400.jpg"
                    verified={true}
                    text='Robert Pattinson and Zoë Kravitz s "Batman" Chemistry Is "Intense"'
                    image="https://pbs.twimg.com/media/FLjkvl0VQAM1Vcb?format=jpg&name=900x900"
                />

                <Trends />

                {posts.map((post, index) => {
                    const {
                        displayName,
                        username,
                        verified,
                        text,
                        image,
                        avatar,
                    } = post;

                    return (
                        <Post
                            key={index}
                            displayName={displayName}
                            username={username}
                            verified={verified}
                            text={text}
                            image={image}
                            avatar={avatar}
                        />
                    );
                })}
            </Feed>

            {/* widgets */}
            <Widgets>
                <FamousPersons />
            </Widgets>
        </>
    );
}

export default ExplorePage;
