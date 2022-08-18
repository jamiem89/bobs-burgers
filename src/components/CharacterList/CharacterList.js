import './CharacterList.scss'
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = (props) => {
    return (
        <div className="character-list">
            {props.characters.map((item) => {
                return <CharacterCard info={item} key={item.id} />
            })}
        </div>
     );
}

export default CharacterList;