import { useGlobalContext } from '../../../context';
import FamousItem from './FamousItem';

// children: FamousItem
function FamousPersons({ name }) {
    const { famous } = useGlobalContext();

    return (
        <div className="famousContainer">
            <div className="famousContainer__header">
                <h2>{name ? name : 'Who to follow'}</h2>
            </div>
            {famous.map((person, index) => {
                const { avatarImg, name, verified, tagname } = person;
                return (
                    <FamousItem
                        key={index}
                        avatarImg={avatarImg}
                        name={name}
                        verified={verified}
                        tagname={tagname}
                    />
                );
            })}
            <div className="famousContainer__footer">Show more</div>
        </div>
    );
}

export default FamousPersons;
