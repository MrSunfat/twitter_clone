import { useEffect } from 'react';
import {
    Feed,
    FeedHeader,
    Widgets,
    InputWidget,
    Trends,
    FamousPersons,
    Bookmarks,
} from '../components';
import { useGlobalContext } from '../context';

function BookmarkPage() {
    document.title = 'Bookmarks / Twitter Clone';
    const { setActiveOption } = useGlobalContext();

    useEffect(() => {
        setActiveOption('bookmarks');
    }, []);

    return (
        <>
            <Feed>
                <FeedHeader>Bookmarks</FeedHeader>
                <Bookmarks></Bookmarks>
            </Feed>
            <Widgets topElement={<InputWidget />}>
                <Trends />
                <FamousPersons />
            </Widgets>
        </>
    );
}

export default BookmarkPage;
