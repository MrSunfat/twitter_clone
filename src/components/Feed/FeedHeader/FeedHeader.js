import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

function FeedHeader({ children }) {
    return (
        <div className="feed__header">
            {/* header */}
            <h2>
                <a href="#">
                    {children}
                </a>
            </h2>
            <AutoAwesomeOutlinedIcon className="icon" />
        </div>
    );
}

export default FeedHeader;
