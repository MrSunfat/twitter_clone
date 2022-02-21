import React, { useContext, useState, useEffect, useRef } from 'react';
import avatarImg from './Images/avatar.jpg';
import db from './firebase';

const AppContext = React.createContext();

function AppProvider({ children }) {
    const [activeOption, setActiveOption] = useState('home');
    const [notifyOption, setNotifyOption] = useState('All');
    const [isStatusModeOpen, setIsStatusModeOpen] = useState(false);
    const [isEmptyTweetMessage, setIsEmptyTweetMessage] = useState(false);
    const [isInputImgOpen, setIsInputImgOpen] = useState(false);

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        id: new Date().valueOf(),
        avatar: avatarImg,
        displayName: 'Tran Danh',
        username: '@TranDanh123',
        text: '',
        image: '',
        heart: false,
    });

    const [trends, setTrends] = useState([]);
    const [famous, setFamous] = useState([]);

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImg, setTweetImg] = useState('');

    const [idPost, setIdPost] = useState('');
    const [isPostUpdate, setIsPostUpdate] = useState(false);

    const tweetBox = useRef(null);

    useEffect(() => {
        // posts
        db.collection('posts')
            .orderBy('time', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
                // querySnapshot.forEach((doc) => {
                //     console.log(`${doc} => ${doc.data()}`);
                // });
            });
    }, []);

    useEffect(() => {
        db.collection('trends').onSnapshot((snapshot) => {
            setTrends(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    useEffect(() => {
        db.collection('famous').onSnapshot((snapshot) => {
            setFamous(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    const showStatusMode = () => {
        setIsStatusModeOpen(true);
    };

    const findDateTime = () => {
        const monthText = {
            1: 'Jan',
            2: 'Feb',
            3: 'Mar',
            4: 'Apr',
            5: 'May',
            6: 'Jun',
            7: 'Jul',
            8: 'Aug',
            9: 'Sep',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec',
        };
        const currentTime = new Date();
        let res = '';
        let hours = currentTime.getHours(),
            month = currentTime.getMonth() + 1,
            minutes = currentTime.getMinutes();
        let showMinutes = minutes < 10 ? `0${minutes}` : minutes;
        let hours_minutes =
            hours <= 12
                ? hours + ':' + showMinutes + ' am'
                : hours - 12 + ':' + showMinutes + ' pm';

        res +=
            monthText[month] +
            ' ' +
            currentTime.getDate() +
            ', ' +
            currentTime.getFullYear() +
            ' ' +
            hours_minutes;
        return res;
    };

    const openInputImg = () => {
        setIsInputImgOpen(!isInputImgOpen);
    };

    const value = {
        tweetBox,
        activeOption,
        notifyOption,
        isStatusModeOpen,
        isInputImgOpen,
        post,
        posts,
        trends,
        famous,
        tweetMessage,
        tweetImg,
        isEmptyTweetMessage,
        idPost,
        isPostUpdate,
        setTweetMessage,
        setTweetImg,
        setActiveOption,
        setNotifyOption,
        showStatusMode,
        findDateTime,
        setIsInputImgOpen,
        setPost,
        setPosts,
        setIsEmptyTweetMessage,
        setIdPost,
        setIsPostUpdate,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useGlobalContext() {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
