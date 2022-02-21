import { useEffect } from 'react';
import {
    Feed,
    FeedHeader,
    NotifyOption,
    NotifyItem,
    Widgets,
    InputWidget,
    Trends,
    FamousPersons,
} from '../components';
import { useGlobalContext } from '../context';

function NotificationPage() {
    document.title = 'Notifications / Twitter Clone';
    const { activeOption, setActiveOption } = useGlobalContext();

    useEffect(() => {
        setActiveOption('notifications');
    }, [activeOption]);

    return (
        <>
            {/* Feed */}
            <Feed>
                {/* header */}
                <FeedHeader>Notifications</FeedHeader>
                <NotifyOption>
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                    <NotifyItem
                        avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te"
                        name="Deadpool"
                        text="follow you"
                    />
                </NotifyOption>
            </Feed>

            {/* widgets */}
            <Widgets topElement={<InputWidget />}>
                <Trends />

                <FamousPersons />
            </Widgets>
        </>
    );
}

export default NotificationPage;
