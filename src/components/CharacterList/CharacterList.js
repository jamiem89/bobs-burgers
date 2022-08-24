import './CharacterList.scss'
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = (props) => {

    let filteredChars = props.characters;

    if(props.searchTerm) {
        filteredChars =  props.characters.filter(char => {
            return char.name.toLowerCase().includes(props.searchTerm);
        })
    } else {
        filteredChars = props.characters;
    }

    return (
        <div className="character-list">
            {filteredChars.map((item) => {
                return <CharacterCard info={item} key={item.id} />
            })}
        </div>
     );
}

export default CharacterList;