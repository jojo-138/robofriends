import './App.css';
import 'tachyons';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <div className='App'>
      <div className='title f1 black-70'>Robofriends</div>
      <SearchBar />
      <ErrorBoundary>
        <CardList />
      </ErrorBoundary>
    </div>
  );
};

export default App;
