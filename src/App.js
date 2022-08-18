import {useState, useEffect} from 'react';
import './App.scss';
import Loading from './components/Loading/Loading'
import Home from './components/Home/Home'

function App() {

    const [charList, setCharList] = useState([]);
    const [fetchedData, setFetchedData] = useState(false);

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
        <div className="App">
            {!fetchedData && <Loading /> }
            {fetchedData && <Home characters={charList} /> }
        </div>
        </>);
}

export default App;
