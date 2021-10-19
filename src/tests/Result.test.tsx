import ReactDOM from 'react-dom';
import Result from '../components/Result';
import store from '../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Result />
    </Provider>,
    div
  );
});
