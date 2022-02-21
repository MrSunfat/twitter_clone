import React from 'react';
import { Sidebar, SidebarOnMobile } from './components';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import NotificationPage from './pages/NotificationPage';
import MessagePage from './pages/MessagePage';
import BookmarkPage from './pages/BookmarkPage';
import ListPage from './pages/ListPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';
import './responsive/responsive.css';

function App() {
    

    return (
        // BEM
        <div className="app">
            {/* sidebar*/}
            <Sidebar />
            <SidebarOnMobile />

            <Routes>
                <Route path="/home" element={<Homepage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/notifications" element={<NotificationPage />} />
                <Route path="/messages" element={<MessagePage />} />
                <Route path="/bookmarks" element={<BookmarkPage />} />
                <Route path="/lists" element={<ListPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default App;
