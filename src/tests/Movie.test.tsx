import ReactDOM from 'react-dom';
import Movie from '../components/Movie';
import store from '../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Movie
        key={1}
        title={'Teste'}
        categories={['teste']}
        favorite={true}
        index={1}
        labels={['teste']}
      />
    </Provider>,
    div
  );
});
