import ReactDOM from 'react-dom';
import SearchResult from '../components/SearchResult';
import store from '../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <SearchResult
        openModal={false}
        word='string'
        actionClose={''}
        categorieFilter={''}
        labels={''}
        favorite={false}
      />
    </Provider>,
    div
  );
});
