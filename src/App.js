import {useState, useEffect} from 'react';
import './App.scss';
import Loading from './components/Loading/Loading'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {

    const [charList, setCharList] = useState([]);
    const [fetchedData, setFetchedData] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setCharList(data);
            setFetchedData(true)
            console.log('Recieved data');
        })
    },[])

    return (<>
        <div className="app">
            {!fetchedData && <Loading /> }
            {fetchedData && (
                <>
                    <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                    <Home characters={charList} searchTerm={searchTerm} />
                </>
            )}
        </div>
        </>);
}

export default App;
