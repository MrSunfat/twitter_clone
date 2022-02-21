import './PinnedLists.css';

function PinnedLists({ name, text }) {
    return (
        <div className={`pinnedLists ${name === 'Pinned Lists' && 'active'}`}>
            <h2 className="pinnedLists__title">{name}</h2>
            <p className="pinnedLists__text">{text}</p>
        </div>
    );
}

export default PinnedLists;
