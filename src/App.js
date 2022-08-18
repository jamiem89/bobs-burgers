import {useState, useEffect} from 'react';
import './App.scss';
import Loading from './components/Loading/Loading'
import Home from './components/Home/Home'

function App() {

    const [charList, setCharList] = useState([]);
    const [fetchedData, setFetchedData] = useState(false);

    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30')
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
