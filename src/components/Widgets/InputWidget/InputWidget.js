import SearchIcon from '@mui/icons-material/Search';
import { useGlobalContext } from '../../../context';

function InputWidget() {
    const { isFocusTwitter, searchTwitter } = useGlobalContext();
    return (
        <div className={`widgets__input ${isFocusTwitter && 'active'}`}>
            <div className="widgets__inputContainer">
                <SearchIcon className="widgets__searchIcon" />
                <input
                    placeholder="Search Twitter"
                    type="text"
                    onFocus={searchTwitter}
                />
            </div>
        </div>
    );
}

export default InputWidget;
