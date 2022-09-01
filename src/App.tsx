import './App.css';
import { useState, useEffect, ChangeEvent } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import { getData } from './utils/data.utils';

export type Monster = {
  name: string;
  id: string;
  email: string;
}


const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(monsters);
    }

    fetchMonsters();
  }, [])

  useEffect(() => {
    const filteredMonsters = monsters.filter(monster => {
      if (searchInput === '') {
        return true;
      }
      return monster.name.includes(searchInput)
    });
    setFilteredMonsters(filteredMonsters);
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
