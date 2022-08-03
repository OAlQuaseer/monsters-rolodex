import './App.css';
import { Component } from 'react'; 
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      }).then(users => {
        this.setState(state => {
          return {
            monsters: users
          }
        })
      })
  }

  onSearchChange = event => {
    this.setState(state => {
      return {
        searchInput: event.target.value
      }
    })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      if (this.state.searchInput === '') {
        return true;
      }
      return monster.name.includes(this.state.searchInput)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className='monsters-search-box' placeholder='Search Monster' onChangeHandler={this.onSearchChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
