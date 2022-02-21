import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import avatarImg from '../../Images/avatar.jpg';
import './TweetAccount.css';

function TweetAccount() {
  return (
    <div className='tweetAccout'>
        <Avatar src={avatarImg} className='tweetAccout__avatar' />
        <div className="tweetAccout__info">
          <div className='tweetAccout__name'>
              <h2>Tran Danh</h2>
              <h3>@TranDan123</h3>
          </div>
          <MoreHorizIcon className='tweetAccout__more' />
        </div>
    </div>
  )
}

export default TweetAccount