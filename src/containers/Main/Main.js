import { useEffect } from 'react';
import 'tachyons';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';


const Main = ({ onFetchRobots, onSearchChange, robots, searchField }) => {
  useEffect (() => {
    onFetchRobots();
  }, [onFetchRobots])

  return (
    <>
      <div className='title f1 black-70'>Robofriends</div>
      <SearchBar handleChange={onSearchChange}/>
      <CardList users={robots} input={searchField}/>
    </>
  )
}

export default Main;