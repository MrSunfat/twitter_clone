import React from 'react';
import './Feed.css';

function Feed({ children }) {
  return (
    <div id='feed' className='feed'>
        {children}
    </div>
  )
}

export default Feed