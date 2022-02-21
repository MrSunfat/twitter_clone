import { Button } from '@mui/material';
import './Messages.css';

function Messages({ title, text, nameBtn }) {
  return (
    <div className='messages'>
        <h1 className='messages__title'>{title}</h1>
        <p className='messages__text'>{text}</p>
        <Button variant="contained" className='messages__btn'>{nameBtn}</Button>
    </div>
  )
}

export default Messages