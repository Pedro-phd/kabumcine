import ReactDOM from 'react-dom';
import AddMovie from '../components/AddMovie';
import store from '../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AddMovie />
    </Provider>,
    div
  );
});
