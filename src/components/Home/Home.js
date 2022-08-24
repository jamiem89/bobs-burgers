import Header from '../Header/Header';
import CharacterList from '../CharacterList/CharacterList';

const Home = (props) => {

    return (
        <div className="home">
            <CharacterList characters={props.characters} searchTerm={props.searchTerm}/>
        </div>
     );
}

export default Home;