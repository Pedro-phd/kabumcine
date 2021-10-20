import { v1 } from 'uuid';
import { IReduxAction, IMovieReducer, IMovieAdd } from '../../typings';

const initialState: IMovieReducer = {
  movieList: [],
};

export default function MovieReducer(
  state = initialState,
  { type, payload }: IReduxAction
) {
  switch (type) {
    case 'ADD':
      const { title, categories, favorite, labels } = payload as IMovieAdd;
      return {
        movieList: [
          ...state.movieList,
          {
            id: v1(),
            title,
            categories,
            labels,
            favorite,
          },
        ],
      };
    case 'REMOVE':
      const movieList = state.movieList;
      const newList = movieList.filter((movie) => movie.id != payload);
      return {
        movieList: [...newList],
      };
    default:
      return state;
  }
}
