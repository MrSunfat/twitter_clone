import { useEffect } from 'react';
import {
    Feed,
    FeedHeader,
    Widgets,
    InputWidget,
    Trends,
    FamousPersons,
    PinnedLists,
} from '../components';
import { useGlobalContext } from '../context';

function ListPage() {
    document.title = 'Lists / Twitter Clone';
    const { setActiveOption } = useGlobalContext();

    useEffect(() => {
        setActiveOption('lists');
    }, []);
    return (
        <>
            <Feed>
                <FeedHeader>Lists</FeedHeader>
                <PinnedLists
                    name="Pinned Lists"
                    text="Nothing to see here yet — pin your favorite Lists to access them quickly."
                />

                <FamousPersons name="Discover new Lists" />

                <PinnedLists
                    name="Your Lists"
                    text="You haven't created or followed any Lists. When you do, they'll show up here."
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

export default ListPage;
