import './NotifyOption.css';
import NotifyItem from './NotifyItem';
import { useGlobalContext } from '../../../context';

function NotifyOption({ children }) {
    const { notifyOption, setNotifyOption } = useGlobalContext();

    return (
        <div className="notifyOption">
            <div className="notifyOption__header">
                <div
                    className={`notifyOption__all ${
                        notifyOption === 'All' && 'active'
                    }`}
                    onClick={() => setNotifyOption('All')}
                >
                    <h3>All</h3>
                    <div className="line"></div>
                </div>
                <div className={`notifyOption__mentions ${
                        notifyOption === 'Mentions' && 'active'
                    }`}
                    onClick={() => setNotifyOption('Mentions')}
                >
                    <h3>Mentions</h3>
                    <div className="line"></div>
                </div>
            </div>
            <div className="notifyOption__main">
                {notifyOption === 'All' ? children : <h1>Nothing...</h1>}
            </div>
        </div>
    );
}

export default NotifyOption;
