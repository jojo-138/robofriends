import { connect } from 'react-redux';
import { setSearchField, fetchRobots } from '../../actions/actions';
import Main from '../Main/Main';
import './App.css';

const mapStateToProps = state => {
  const { searchField } = state.searchField;
  const { robots, isPending, fetchError } = state.robots;
  return {
    searchField: searchField,
    robots: robots,
    isPending: isPending,
    fetchError: fetchError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onFetchRobots: () => dispatch(fetchRobots())
  }
}

const App = ({ searchField, onSearchChange, robots, onFetchRobots }) => {
  return (
    <div className="App">
      <Main onFetchRobots={onFetchRobots} onSearchChange={onSearchChange} robots={robots} searchField={searchField} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);