import { useEffect } from 'react';
import {
    Feed,
    FeedHeader,
    Widgets,
    InputWidget,
    Trends,
    FamousPersons,
    Profile,
} from '../components';
import { useGlobalContext } from '../context';
import avatarImg from '../Images/avatar.jpg';

function ProfilePage() {
    document.title = 'Profile / Twitter Clone';
    const { setActiveOption } = useGlobalContext();

    useEffect(() => {
        setActiveOption('profile');
    }, []);

    return (
        <>
            <Feed>
                <FeedHeader>Tran Danh</FeedHeader>
                <Profile
                    avatar={avatarImg}
                    displayName="Tran Danh"
                    username="TranDanh123"
                    bg="https://pbs.twimg.com/media/FLa6GJraUAA9qpW?format=jpg&name=4096x4096"
                />
            </Feed>

            {/* widgets */}
            <Widgets topElement={<InputWidget />}>
                <Trends />
                <FamousPersons />
            </Widgets>
        </>
    );
}

export default ProfilePage;
