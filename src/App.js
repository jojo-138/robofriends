import { useEffect, useState } from 'react';
import './App.css';
import 'tachyons';
import { SearchBar } from './components/SearchBar';
import { CardList } from './components/CardList';

function App() {
  const [users, setUsers] = useState([]);
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <div className='title f1 black-70'>Robofriends</div>
      <SearchBar handleChange={e => setInput(e.target.value)}/>
      <CardList users={users} input={input}/>
    </div>
  );
}

export default App;
