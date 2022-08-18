import CharacterList from '../CharacterList/CharacterList';

const Home = (props) => {

    return (
        <div className="home">
            <h1>This is the homepage, and data has loaded</h1>
            <CharacterList characters={props.characters}/>
        </div>
     );
}

export default Home;