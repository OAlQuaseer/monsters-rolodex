import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';


const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  const onSearchChange = event => {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      }).then(users => {
        setMonsters(users)
      })
  }, [])

  useEffect(() => {
    const filteredMonsters = monsters.filter(monster => {
      if (searchInput === '') {
        return true;
      }
      return monster.name.includes(searchInput)
    });
    setfilteredMonsters(filteredMonsters);
  }, [searchInput, monsters])



  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' placeholder='Search Monster' onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}


export default App;
