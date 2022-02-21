import { useEffect } from 'react';
import { Feed, FeedHeader, Widgets, Messages } from '../components';
import { useGlobalContext } from '../context';

function MessagePage() {
    document.title = 'Messages / Twitter Clone';
    const { setActiveOption } = useGlobalContext();

    useEffect(() => {
        setActiveOption('messages');
    }, []);
    return (
        <>
            <Feed>
                <FeedHeader>Messages</FeedHeader>
                <Messages
                    title="Send a message, get a message"
                    text="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
                    nameBtn="Start a conversation"
                />
            </Feed>

            <Widgets>
                <Messages
                    title="You don’t have a message selected"
                    text="Choose one from your existing messages, or start a new one"
                    nameBtn="New message"
                />
            </Widgets>
        </>
    );
}

export default MessagePage;
