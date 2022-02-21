import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Button from '@mui/material/Button';
import './FamousItem.css';

function FamousItem({ avatarImg, name, verified, tagname }) {
    const defaultAvatar =
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMyg6bjfn1KGP-hAEhv77i7N1S43cABKgg5aLj6v-N1zFbB7te';

    const dotName = name.substring(0, 18) + '...';
    return (
        <div className="famousItem">
            <div className="famousItem__avatar">
                <img src={!avatarImg ? defaultAvatar : avatarImg} />
            </div>
            <div className="famousItem__main">
                <div className="famousItem__info">
                    <h2 className="famousItem__name">
                        {name.length < 18 ? name : dotName }
                        {verified && <VerifiedUserIcon className="famousItem__badge" />}
                    </h2>
                    <p className="famousItem__tagname">
                        {`${!tagname ? '@Space_Station' : tagname}`}
                    </p>
                </div>
                <Button variant="text" className="famousItem__follow">Follow</Button>
            </div>
        </div>
    );
}

export default FamousItem;
