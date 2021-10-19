import ReactDOM from 'react-dom';
import SearchBar from '../components/SearchBar';
import store from '../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <SearchBar />
    </Provider>,
    div
  );
});
