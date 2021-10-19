import './global.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import Result from './components/Result';
import Title from './components/Title';

function App() {
  return (
    <div className='App'>
      <Title />
      <SearchBar />
      <AddMovie />
      <Result />
    </div>
  );
}

export default App;
