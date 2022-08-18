import Header from '../Header/Header';
import CharacterList from '../CharacterList/CharacterList';

const Home = (props) => {

    return (
        <div className="home">
            <Header />
            <CharacterList characters={props.characters}/>
        </div>
     );
}

export default Home;